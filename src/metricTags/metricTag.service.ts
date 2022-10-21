import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MetrcTagGenerateRequest } from 'src/commons/datatypes';
import { InternalData } from 'src/internalData/internaldata.entity';
import { MetricTagType } from 'src/metricTagTypes/metricTagType.entity';
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
