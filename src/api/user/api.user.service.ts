import { Injectable } from '@nestjs/common';
import { UserService } from '../../core/user/user.service';
import { UserInterface } from '../../core/user/interfaces/user.interface';

@Injectable()
export class ApiUserService {
  constructor(private readonly userService: UserService) {}

  getUser(): string {
    return this.userService.findAll();
  }

  async create(user: UserInterface) {
    return await this.userService.create(user);
  }
}
