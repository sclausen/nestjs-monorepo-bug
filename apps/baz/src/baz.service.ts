import { Injectable } from '@nestjs/common';

@Injectable()
export class BazService {
  getHello(): string {
    return 'Hello World!';
  }
}
