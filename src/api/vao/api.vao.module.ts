import { VaoController } from './vao.controller';
import { ApiVaoService } from './api.vao.service';
import { Module } from '@nestjs/common';
import { HebergementModule } from '../../core/hebergement/hebergement.module';

@Module({
  imports: [HebergementModule],
  controllers: [VaoController],
  providers: [ApiVaoService],
})
export class ApiVaoModule {}
