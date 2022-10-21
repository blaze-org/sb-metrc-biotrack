import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MetrcTagGenerateRequest } from 'src/commons/datatypes';
import { InternalData } from 'src/internalData/internaldata.entity';
import { MetricTagType } from 'src/metricTagTypes/metricTagType.entity';
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

  async createRandomMetricTags(metricTagModel: MetricTag) {
    return this.metricTagRepository.save(metricTagModel);
  }

  async generateQtyMetricTags(metrcTagrRequest: MetrcTagGenerateRequest) {
    const baseString = '1C4BB030000025D00000';
    let baseNumber = 0o000;
    const listMetricTags: MetricTag[] = [];
    const basemetricTagModel = new MetricTag();
    basemetricTagModel.Status = 'Received';
    basemetricTagModel.Used = false;
    const newMetrcType = new MetricTagType();
    newMetrcType.Name = metrcTagrRequest.typeName;
    newMetrcType.Type = metrcTagrRequest.type;
    basemetricTagModel.MetricType = newMetrcType;
    const newInternalData = new InternalData();
    newInternalData.licenseNumber = 'C12-1000005-LIC';
    newInternalData.state = 'CA';
    basemetricTagModel.InternalData = newInternalData;
    for (let i = 0; i < metrcTagrRequest.quantity; i++) {
      const newMetricTag = { ...basemetricTagModel };
      baseNumber = +i;
      const final = baseString + baseNumber;
      newMetricTag.Tag = final;
      listMetricTags.push(newMetricTag);
    }
    return this.metricTagRepository.save(listMetricTags);
  }
}
