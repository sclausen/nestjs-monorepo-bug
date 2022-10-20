import { Module } from '@nestjs/common';
import { BazController } from './baz.controller';
import { BazService } from './baz.service';

@Module({
  imports: [],
  controllers: [BazController],
  providers: [BazService],
})
export class BazModule {}
