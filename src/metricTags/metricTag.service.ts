import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { MetricTag } from './metricTag.entity';
import { MetricTagRepository } from './metricTag.repository';

@Injectable()
export class MetricTagService {
  constructor(
    @InjectRepository(MetricTag)
    private readonly metricTagRepository: MetricTagRepository,
  ) {}

  async getMetricTags(): Promise<MetricTag[]> {
    return await this.metricTagRepository.find();
  }

  async getMetricTagsBetweenDate(dateStart, dateEnd):Promise<MetricTag[]>{
    if(dateStart && dateEnd){
      return await this.metricTagRepository.findMetricTagsBetweenDate(dateStart, dateEnd);
    } else {
      return await this.metricTagRepository.find();
    }
  }

  async createMetricTags(metricTagModel: MetricTag) {
    return this.metricTagRepository.save(metricTagModel);
  }

  async getMetricTagsByType(type: string): Promise<MetricTag[]> {
    return await this.metricTagRepository.find({
      where: {
        'MetricType.Name': { $eq: type },
      },
    });
  }

  async isValid(tag: string): Promise<boolean> {
    let isValid = false;
    await this.metricTagRepository
      .findOneBy({ Tag: tag })
      .then((response) => {
        if (response != null && !response.Used) {
          isValid = true;
        }
      })
      .catch((error) => {
        isValid = false;
      });
    return isValid;
  }
}
