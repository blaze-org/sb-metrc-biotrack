import { Body, Controller, Get, Param, Post } from '@nestjs/common';
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
    return await this.metricTagService.createMetricTags(
      new MetricTag(metricTags),
    );
  }

  @Get('type/:type')
  async getMetricTagsByType(@Param('type') type: string): Promise<MetricTag[]> {
    return this.metricTagService.getMetricTagsByType(type);
  }

  @Get('valid/:tag')
  async validateMetricTagsBId(@Param('tag') tag: string): Promise<boolean> {
    return this.metricTagService.isValid(tag);
  }

}
