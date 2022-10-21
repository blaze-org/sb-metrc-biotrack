import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { Facility } from './facility.entity';

@Injectable()
export class FacilityService {
  constructor(
    @InjectRepository(Facility)
    private readonly facilityRepository: MongoRepository<Facility>,
  ) {}

  async getFacilities(): Promise<Facility[]> {
    return await this.facilityRepository.find();
  }

  async createFacilities(facilityModel: Facility) {
    return this.facilityRepository.save(facilityModel);
  }
}
