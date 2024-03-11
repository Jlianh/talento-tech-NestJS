import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class LoginDto {
  @IsNotEmpty()
  @IsEmail({}, { message: 'The email has an invalid format' })
  readonly email: string;
  @IsString()
  @IsNotEmpty()
  readonly password: string;
}
