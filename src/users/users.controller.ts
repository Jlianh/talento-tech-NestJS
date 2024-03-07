import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './users.entity';
import { CreateUserDto } from './dto/userDTO';

@Controller('users')
export class UsersController {

    constructor(private readonly userService: UsersService){}

    @Get('/getAllUsers')
    async findAll(): Promise<User[]>{
        return this.userService.findAllUsers();
    }

    @Get('/getUserById/:id')
    async findById(@Param('id') id: String): Promise<User[]>{
        return this.userService.findUserById(id);
    }

    @Post('/addUser')
    async addUser(@Body() userDto: CreateUserDto): Promise<User>{
        return this.userService.addUser(userDto)
    }

}
