import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './users.entity';
import { CreateUserDto } from './dto/userDTO';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get('/getAllUsers')
  async findAll(): Promise<User[]> {
    return this.userService.findAllUsers();
  }

  @Get('/getUserById/:id')
  async findById(@Param('id') id: string): Promise<User[]> {
    return this.userService.findUserById(id);
  }

  @Get('/getUserByEmail/:email')
  async findByEmail(@Param('email') email: string): Promise<User> {
    return this.userService.findByEmail(email);
  }

  @Post('/addUser')
  async addUser(@Body() userDto: CreateUserDto): Promise<User> {
    return this.userService.addUser(userDto);
  }

  @Patch('/editUser/:id')
  async editUser(
    @Body() userDto: CreateUserDto,
    @Param('id') id: string,
  ): Promise<User> {
    return this.userService.editUser(id, userDto);
  }

  @Delete('/deleteUser/:id')
  async deleteUser(@Param('id') id: string): Promise<boolean> {
    return this.userService.deleteUser(id);
  }
}
