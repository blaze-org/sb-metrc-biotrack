import { Test, TestingModule } from '@nestjs/testing';
import { tagsController } from './items.controller';

describe('tagsController', () => {
  let controller: tagsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [tagsController],
    }).compile();

    controller = module.get<tagsController>(tagsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
