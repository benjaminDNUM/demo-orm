import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApiUserModule } from './api/user/api.user.module';
import { User } from './core/user/entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      password: 'postgres',
      username: 'postgres',
      entities: [User],
      database: 'pgWithNest',
      synchronize: true,
      logging: true,
    }),
    ApiUserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
