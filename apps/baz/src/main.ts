import { NestFactory } from '@nestjs/core';
import { BazModule } from './baz.module';

async function bootstrap() {
  const app = await NestFactory.create(BazModule);
  await app.listen(3000);
}
bootstrap();
