import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiUserService } from './api.user.service';
import { CreateUserDto } from '../../core/user/dto/create-user.dto';
import { User } from '../../core/user/entities/user.entity';

@Controller('user')
export class UserController {
  constructor(private readonly userService: ApiUserService) {}

  @Get("")
  async getUser(): Promise<User[]> {
    return await this.userService.getUser();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<User> {
    return await this.userService.findOne(id);
  }

  @Post()
  async create(@Body() user: CreateUserDto): Promise<User> {
    return await this.userService.create(user);
  }
}
