import { Injectable } from '@nestjs/common';
import { JvService } from '../../core/jv/jv.service';

@Injectable()
export class ApiJvService {
  constructor(private readonly jvService: JvService) {}

  findAll() {
    return this.jvService.findAll();
  }
}
