import { Module } from '@nestjs/common';
import { JvService } from './jv.service';

@Module({
  controllers: [],
  providers: [JvService],
  exports: [JvService],
})
export class JvModule {}
