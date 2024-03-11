import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello/:id')
  user(@Param('id') id: string): string {
    return this.appService.getHello(id);
  }
}
