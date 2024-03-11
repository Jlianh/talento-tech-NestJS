import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(name): string {
    return 'Hello ' + name;
  }

  sayGoodbye(): string {
    return 'Bye!';
  }
}
