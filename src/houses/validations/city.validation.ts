import { Injectable } from '@nestjs/common';
import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({ name: 'ExistsCity', async: true })
@Injectable()
export class ExistsCity implements ValidatorConstraintInterface {
  async validate(city: string): Promise<boolean> {
    const response = await fetch('https://api-colombia.com/api/v1/City');
    const cities = await response.json();
    const existsCity: boolean = cities.some((cities) =>
      cities.name.toUpperCase().includes(city.toUpperCase()),
    );
    return existsCity;
  }

  defaultMessage(): string {
    return 'The City doesnt exist';
  }
}
