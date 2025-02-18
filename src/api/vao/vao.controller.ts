import { Controller, Get } from '@nestjs/common';
import { ApiVaoService } from './api.vao.service';
import { Hebergement } from '../../core/hebergement/entities/hebergement';

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

  @Get('pagination')
  async findAllWithPagination(): Promise<[Hebergement[], number]> {
    return await this.vaoService.findAllWithPagination();
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
