import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsString,
  Matches,
  MinLength,
  Validate,
} from 'class-validator';
import { ExistsCity } from '../validations/city.validation';
import { ExistsDepartament } from '../validations/departament.validation';

export class HouseDTO {
  @IsNotEmpty()
  @IsString()
  @Matches(/^(Carrera|Calle|Diagonal|Transversal) \d+\w+ # \d+\w+ - \d+ \w+$/, {
    message:
      'The address must follow the pattern: Carrera|Calle|Diagonal|Transversal 1 # 1A - 1 Sur',
  })
  address: string;

  @IsNotEmpty()
  @IsString()
  @Validate(ExistsCity)
  city: string;

  @IsNotEmpty()
  @IsString()
  @Validate(ExistsDepartament)
  state: string;

  @IsNotEmpty()
  @IsNumber()
  size: number;

  @IsNotEmpty()
  @IsString()
  type: string;

  @IsNotEmpty()
  @IsNumber()
  zipCode: number;

  @IsNotEmpty()
  @IsNumber()
  rooms: number;

  @IsNotEmpty()
  @IsNumber()
  bathrooms: number;

  @IsNotEmpty()
  @IsBoolean()
  parking: boolean;

  @IsNotEmpty()
  @IsNumber()
  price: number;

  code: string;

  image: string;
}
