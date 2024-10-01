import { Injectable } from '@nestjs/common';
import { UserService } from '../../core/user/user.service';

@Injectable()
export class ApiUserService {
  constructor(private readonly userService: UserService) {}

  getUser(): string {
    return this.userService.findAll();
  }
}
