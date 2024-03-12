import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
  Matches,
  MinLength,
  Validate,
} from 'class-validator';
import { UniqueEmailValidator } from '../validations/unique-email.validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsNumber()
  readonly identification: string;
  @IsNotEmpty()
  @MinLength(3)
  @IsString()
  readonly name: string;
  readonly lastname: string;
  @IsNotEmpty()
  @IsEmail()
  @Validate(UniqueEmailValidator)
  readonly email: string;
  @IsNotEmpty()
  @IsString()
  @Matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/, {
    message:
      'The password must contain 8 characters, an uppercase letter, a lowercase letter and a special character',
  })
  readonly password: string;
}
