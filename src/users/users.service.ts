import { Injectable } from '@nestjs/common';
import { User } from './users.entity'
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose'
import { CreateUserDto } from './dto/userDTO';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UsersService {

    constructor(@InjectModel('User') private readonly userModel: Model<User>){}

    async findAllUsers(): Promise<User[]>{
        return this.userModel.find();
    }

    async findUserById(id: String): Promise<User[]>{
        return this.userModel.findById(id);
    }

    async addUser(userDto: CreateUserDto): Promise<User>{
        let hashedPassword = await bcrypt.hash(userDto.password, 10);
        console.log(hashedPassword)
        let user = new this.userModel({
            ...userDto,
            password: hashedPassword
        })
        return user.save();
    }
}
