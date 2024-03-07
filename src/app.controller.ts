import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello/:id')
  user(@Param('id') id: String): string {
    return this.appService.getHello(id);
  }
}
