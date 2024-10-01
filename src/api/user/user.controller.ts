import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiUserService } from './api.user.service';
import { CreateUserDto } from '../../core/user/dto/create-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: ApiUserService) {}

  @Get()
  getUser(): string {
    return this.userService.getUser();
  }

  @Post()
  async create(@Body() user: CreateUserDto) {
    return await this.userService.create(user);
  }
}
