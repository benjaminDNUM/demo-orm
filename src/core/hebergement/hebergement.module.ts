import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Hebergement } from './entities/hebergement';
import { HebergementService } from './hebergement.service';
import { Adresse } from '../adresse/adresse.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Hebergement, Adresse])],
  providers: [HebergementService],
  exports: [HebergementService],
})
export class HebergementModule {}
