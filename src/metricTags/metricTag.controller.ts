import { Body, Controller, Get, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { MetricTag } from './metricTag.entity';
import { MetricTagService } from './metricTag.service';

@Controller('metricTags')
export class MetricTagController {
  constructor(private readonly metricTagService: MetricTagService) {}

  @Get()
  async getMetricTags(): Promise<MetricTag[]> {
    return this.metricTagService.getMetricTags();
  }

  @Post()
  async createMetricTags(
    @Body() metricTags: Partial<MetricTag>,
  ): Promise<MetricTag> {
    metricTags.Used = false;
    return await this.metricTagService.createMetricTags(
      new MetricTag(metricTags),
    );
  }

  @Post('/generate')
  async generateQtyMetricTags(
    @Body() quantity: number
  ): Promise<MetricTag[]> {
    return await this.metricTagService.generateQtyMetricTags(
      quantity,
    );
  }
}
