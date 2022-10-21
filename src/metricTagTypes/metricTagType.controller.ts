import { Body, Controller, Get, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { MetricTagType } from './metricTagType.entity';
import { MetricTagTypeService } from './metricTagType.service';

@Controller('metricTagsType')
export class MetricTagTypeController {
  constructor(private readonly metricTagTypeService: MetricTagTypeService) {}

  @Get()
  async getMetricTagTypes(): Promise<MetricTagType[]> {
    return this.metricTagTypeService.getMetricTagTypes();
  }

  @Post()
  async createMetricTagTypes(
    @Body() metricTagTypes: Partial<MetricTagType>,
  ): Promise<MetricTagType> {
    return await this.metricTagTypeService.createMetricTagTypes(
      new MetricTagType(metricTagTypes),
    );
  }
}
