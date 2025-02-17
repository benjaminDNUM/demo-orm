import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApiVaoModule } from './api/vao/api.vao.module';
import { Hebergement } from './core/hebergement/entities/hebergement';
import { Adresse } from './core/adresse/adresse.entity';
import { HebergementStatut } from './core/hebergement/entities/hebergement-statut';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5436,
      password: 'vao_pwd',
      username: 'vao_u',
      database: 'vao_u',
      schema: 'front',
      synchronize: false,
      logging: true,
      entities: [Hebergement, Adresse, HebergementStatut],
    }),
    ApiVaoModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
