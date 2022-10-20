import { Controller, Get } from '@nestjs/common';
import { BazService } from './baz.service';

@Controller()
export class BazController {
  constructor(private readonly bazService: BazService) {}

  @Get()
  getHello(): string {
    return this.bazService.getHello();
  }
}
