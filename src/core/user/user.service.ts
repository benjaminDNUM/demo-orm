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

  async create(user: UserInterface): Promise<User> {
    return await this.userRepository.save(user);
  }

  async findOne(id: number): Promise<User> {
    return await this.userRepository.findOneBy({ id });
  }

  async findAll() {
    return await this.userRepository.find();
  }
}
