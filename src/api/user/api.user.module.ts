import { Module } from '@nestjs/common';
import { ApiUserService } from './api.user.service';
import { UserController } from './user.controller';
import { UserModule } from '../../core/user/user.module';

@Module({
  imports: [UserModule],
  controllers: [UserController],
  providers: [ApiUserService],
})
export class ApiUserModule {}
