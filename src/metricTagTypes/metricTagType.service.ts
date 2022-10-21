import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { MetricTagType } from './metricTagType.entity';

@Injectable()
export class MetricTagTypeService {
  constructor(
    @InjectRepository(MetricTagType)
    private readonly metricTagTypeRepository: MongoRepository<MetricTagType>,
  ) {}

  async getMetricTagTypes(): Promise<MetricTagType[]> {
    return await this.metricTagTypeRepository.find();
  }

  async createMetricTagTypes(metricTagTypeModel: MetricTagType) {
    return this.metricTagTypeRepository.save(metricTagTypeModel);
  }
}
