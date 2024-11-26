import { Module } from '@nestjs/common';
import { ApiJvService } from './api.jv.service';
import { JvController } from './jv.controller';
import { JvModule } from '../../core/jv/jv.module';

@Module({
  controllers: [JvController],
  providers: [ApiJvService],
  imports: [JvModule],
})
export class ApiJvModule {}
