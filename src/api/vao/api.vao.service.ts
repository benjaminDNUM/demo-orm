import { Injectable } from '@nestjs/common';
import { HebergementService } from '../../core/hebergement/hebergement.service';
import { Hebergement } from '../../core/hebergement/entities/hebergement';

@Injectable()
export class ApiVaoService {
  constructor(private readonly hebergementService: HebergementService) {}

  async findAll(): Promise<Hebergement[]> {
    return await this.hebergementService.findAll();
  }

  async findAllWithRelation(): Promise<Hebergement[]> {
    return await this.hebergementService.findAllWithRelation();
  }

  async findAllWithPagination(): Promise<[Hebergement[], number]> {
    return await this.hebergementService.findAllWithPagination();
  }

  async findBy(): Promise<Hebergement[]> {
    return await this.hebergementService.findBy();
  }

  async insert(): Promise<Hebergement> {
    return await this.hebergementService.insert();
  }

  async update(): Promise<number> {
    return await this.hebergementService.update();
  }
}
