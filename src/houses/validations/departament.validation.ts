import { Injectable } from '@nestjs/common';
import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({ name: 'ExistsCity', async: true })
@Injectable()
export class ExistsDepartament implements ValidatorConstraintInterface {
  async validate(state: string): Promise<boolean> {
    const response = await fetch('https://api-colombia.com/api/v1/Department');
    const departaments = await response.json();
    const existsDepartament: boolean = departaments.some((departament) =>
      departament.name.toUpperCase().includes(state.toUpperCase()),
    );
    return existsDepartament;
  }

  defaultMessage(): string {
    return 'The State doesnt exist';
  }
}
