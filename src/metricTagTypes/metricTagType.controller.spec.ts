import { Test, TestingModule } from '@nestjs/testing';
import { MetricTagTypeController } from './metricTagType.controller';

describe('MetricTagTypeController', () => {
  let controller: MetricTagTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MetricTagTypeController],
    }).compile();

    controller = module.get<MetricTagTypeController>(MetricTagTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
