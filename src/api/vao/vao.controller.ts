import { Controller, Get, Post } from '@nestjs/common';
import { ApiVaoService } from './api.vao.service';
import { Hebergement } from '../../core/hebergement/entities/hebergement';
import { UpdateResult } from 'typeorm';

@Controller('vao')
export class VaoController {
  constructor(private readonly vaoService: ApiVaoService) {}

  @Get('')
  async findAll(): Promise<Hebergement[]> {
    return await this.vaoService.findAll();
  }

  @Get('with-relation')
  async findAllWithRelation(): Promise<Hebergement[]> {
    return await this.vaoService.findAllWithRelation();
  }

  @Get('group-by')
  async findBy(): Promise<Hebergement[]> {
    return await this.vaoService.findBy();
  }

  @Get('post')
  async insert(): Promise<Hebergement> {
    return await this.vaoService.insert();
  }

  @Get('update')
  async update(): Promise<number> {
    return await this.vaoService.update();
  }
}
