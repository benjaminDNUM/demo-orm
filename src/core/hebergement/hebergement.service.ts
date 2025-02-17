import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Hebergement } from './entities/hebergement';
import { DataSource, Repository, UpdateResult } from 'typeorm';
import { Adresse } from '../adresse/adresse.entity';

@Injectable()
export class HebergementService {
  constructor(
    @InjectRepository(Hebergement)
    private hebergementRepository: Repository<Hebergement>,
    private dataSource: DataSource,
  ) {}

  async findAll(): Promise<Hebergement[]> {
    return await this.hebergementRepository.find();
  }

  async findAllWithRelation(): Promise<Hebergement[]> {
    return await this.hebergementRepository.find({
      relations: {
        adresse: true,
      },
      take: 2,
    });
  }

  async findBy(): Promise<Hebergement[]> {
    return await this.hebergementRepository
      .createQueryBuilder('Hebergement')
      .select('Hebergement.hebergementId', 'uuid')
      .addSelect('count(Hebergement.id)', 'toto')
      .groupBy('Hebergement.hebergementId')
      .getRawMany();
  }

  async update(): Promise<number> {
    return (
      await this.hebergementRepository.update(22, {
        nom: 'update',
      })
    ).affected;
  }

  async insert(): Promise<Hebergement> {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    let res: Hebergement;
    try {
      const newAdresse = await queryRunner.manager.upsert(
        Adresse,
        [
          {
            cleInsee: 'sdfsdf',
            label: 'test type orm',
            long: 1.5,
            lat: 2.1,
            codeInsee: '69521',
            codePostal: '69521',
          },
        ],
        ['cleInsee'],
      );
      res = await queryRunner.manager.save(Hebergement, {
        deleted: false,
        nom: 'test type orm 2',
        adresse: { id: newAdresse.identifiers[0].id },
      });
      await queryRunner.commitTransaction();
    } catch (e) {
      await queryRunner.rollbackTransaction();
      throw e;
    } finally {
      await queryRunner.release();
    }
    return res;
  }
}
