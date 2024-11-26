import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApiUserModule } from './api/user/api.user.module';
import { User } from './core/user/entities/user.entity';
import { Jv } from './core/jv/entities/jv.entity';
import { ApiJvModule } from './api/jv/api.jv.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      password: 'postgres',
      username: 'postgres',
      entities: [User, Jv],
      database: 'pgWithNest',
      synchronize: true,
      logging: true,
    }),
    ApiUserModule,
    ApiJvModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
