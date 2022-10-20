import { Test, TestingModule } from '@nestjs/testing';
import { BazController } from './baz.controller';
import { BazService } from './baz.service';

describe('BazController', () => {
  let bazController: BazController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [BazController],
      providers: [BazService],
    }).compile();

    bazController = app.get<BazController>(BazController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(bazController.getHello()).toBe('Hello World!');
    });
  });
});
