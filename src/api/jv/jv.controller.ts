import { Controller, Get } from '@nestjs/common';
import { ApiJvService } from './api.jv.service';

@Controller('jv')
export class JvController {
  constructor(private readonly jvService: ApiJvService) {}

  @Get()
  findAll() {
    return this.jvService.findAll();
  }
}
