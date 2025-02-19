import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Hebergement } from './entities/hebergement';
import { DataSource, Repository } from 'typeorm';
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

  async findById(): Promise<Hebergement[]> {
    return await this.hebergementRepository.find({ where: { id: 1 } });
  }

  async findAllWithRelation(): Promise<Hebergement[]> {
    return await this.hebergementRepository.find({
      select: {
        id: true,
        nom: true,
        adresse: { cleInsee: true, codeInsee: true },
        statutValue: true,
      },
    });
  }

  async findAllWithPagination(): Promise<[Hebergement[], number]> {
    return await this.hebergementRepository.findAndCount({
      select: {
        id: true,
        nom: true,
        adresse: { cleInsee: true, codeInsee: true },
        statutValue: true,
      },
      skip: 2,
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
