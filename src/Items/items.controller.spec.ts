import { Test, TestingModule } from '@nestjs/testing';
import { itemsController } from './items.controller';

describe('itemsController', () => {
  let controller: itemsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [itemsController],
    }).compile();

    controller = module.get<itemsController>(itemsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
