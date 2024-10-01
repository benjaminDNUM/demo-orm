import { Controller, Get } from '@nestjs/common';
import { ApiUserService } from './api.user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: ApiUserService) {}

  @Get()
  getUser(): string {
    return this.userService.getUser();
  }
}
