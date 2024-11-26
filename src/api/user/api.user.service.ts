import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UserService } from '../../core/user/user.service';
import { UserInterface } from '../../core/user/interfaces/user.interface';
import { User } from '../../core/user/entities/user.entity';

@Injectable()
export class ApiUserService {
  constructor(private readonly userService: UserService) {}

  async getUser(): Promise<User[]> {
    return await this.userService.findAll();
  }

  async findOne(id: number): Promise<User> {
    const user = await this.userService.findOne(id);

    if (!user) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
    return user;
  }

  async create(user: UserInterface): Promise<User> {
    return await this.userService.create(user);
  }
}
