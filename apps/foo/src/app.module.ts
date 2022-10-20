import { Module } from '@nestjs/common';
import { BarModule } from '@app/bar';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [BarModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
