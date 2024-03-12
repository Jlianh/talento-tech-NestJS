import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './users.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/userDTO';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async findAllUsers(): Promise<User[]> {
    return this.userModel.find();
  }

  async findUserById(id: string): Promise<User[]> {
    return this.userModel.findById(id);
  }

  async addUser(userDto: CreateUserDto): Promise<User> {
    const hashedPassword = await bcrypt.hash(userDto.password, 10);
    const user = new this.userModel({
      ...userDto,
      password: hashedPassword,
    });
    return user.save();
  }

  async editUser(id: string, userDto: CreateUserDto): Promise<User> {
    if (userDto.password) {
      const hashedPassword = await bcrypt.hash(userDto.password, 10);
      userDto = {
        ...userDto,
        password: hashedPassword,
      };
    }
    try {
      return this.userModel.findByIdAndUpdate(id, userDto, { new: true });
    } catch (error) {
      throw new NotFoundException('User not found');
    }
  }

  async deleteUser(id: string): Promise<boolean> {
    try {
      const user = this.userModel.findByIdAndDelete(id);
      if (!user) {
        throw new NotFoundException('User not found');
      }
      return true;
    } catch (error) {
      throw new NotFoundException('User not found');
    }
  }

  async findByEmail(email: string): Promise<User> {
    return await this.userModel.findOne({ email: email });
  }
}
