/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersRepository } from './repository/users-repository';
import { UnautorizedError } from 'src/common/errors/types/Unautorized-error';
import { NotFoundError } from 'src/common/errors/types/NotFoundError';

@Injectable()
export class UsersService {
    constructor(
        private readonly userRepository: UsersRepository
    ) {}
  create(createUserDto: CreateUserDto) {
    return this.userRepository.create(createUserDto);
  }

  findAll() {
    //throw new UnautorizedError('Not authorized');

    return this.userRepository.findAll();
  }

  async findOne(id: number) {
    const user = await this.userRepository.findOne(id);

    if(!user) {
        throw new NotFoundError('User not found');
    }

    return user;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.userRepository.update(id, updateUserDto);
  }

  remove(id: number) {
    return this.userRepository.remove(id);
  }
}
