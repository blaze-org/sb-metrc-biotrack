import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { MetricTag } from './metricTag.entity';

@Injectable()
export class MetricTagService {
  constructor(
    @InjectRepository(MetricTag)
    private readonly metricTagRepository: MongoRepository<MetricTag>,
  ) {}

  async getMetricTags(): Promise<MetricTag[]> {
    return await this.metricTagRepository.find();
  }

  async createMetricTags(metricTagModel: MetricTag) {
    return this.metricTagRepository.save(metricTagModel);
  }

  async createRandomMetricTags(metricTagModel: MetricTag){
    return this.metricTagRepository.save(metricTagModel);
  }

  async generateQtyMetricTags(quantity: number){
    const baseString = "1A4FF030000025D00000"
    let baseNumber = 0o000;
    let listMetricTags = [];
    let metricTagModel = new MetricTag;
    metricTagModel.Status= "Received";
    metricTagModel.Used= false;
    metricTagModel.MetricType.Name= "CannabisPlant";
    metricTagModel.MetricType.Type= "Plant";
    metricTagModel.InternalData.licenseNumber= "C12-1000005-LIC";
    metricTagModel.InternalData.state = "CA";
    for (let i = 0; i < quantity; i++) {
      baseNumber =+ i;
      let final = baseString + baseNumber;
      metricTagModel.Tag = final;
      listMetricTags.push(metricTagModel);
    }
    return this.metricTagRepository.save(listMetricTags);
  }
}
