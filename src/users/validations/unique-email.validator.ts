import { Injectable } from '@nestjs/common';
import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { UsersService } from '../users.service';

@ValidatorConstraint({ name: 'UniqueEmail', async: true })
@Injectable()
export class UniqueEmailValidator implements ValidatorConstraintInterface {
  constructor(private readonly usersService: UsersService) {}

  async validate(email: string): Promise<boolean> {
    try {
      const user = await this.usersService.findByEmail(email);
      if (user) return false;
      return true;
    } catch (error) {
      return false;
    }
  }

  defaultMessage(): string {
    return 'Email already exists';
  }
}
