import { Injectable } from '@nestjs/common';
import { UserInterface } from './interfaces/user.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async create(user: UserInterface) {
    await this.userRepository.save(user);
  }

  findAll() {
    return `This action returns all user`;
  }
}
