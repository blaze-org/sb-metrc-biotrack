import { Test, TestingModule } from '@nestjs/testing';
import { MetricTagController } from './metricTag.controller';

describe('MetricTagController', () => {
  let controller: MetricTagController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MetricTagController],
    }).compile();

    controller = module.get<MetricTagController>(MetricTagController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
