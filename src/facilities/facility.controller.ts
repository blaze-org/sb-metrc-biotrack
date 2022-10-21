import { Body, Controller, Get, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { Facility } from './facility.entity';
import { FacilityService } from './facility.service';

@Controller('facilities')
export class FacilityController {
  constructor(private readonly facilityService: FacilityService) {}

  @Get()
  async getFacilities(): Promise<Facility[]> {
    return this.facilityService.getFacilities();
  }

  @Post()
  async createFacilities(
    @Body() facilities: Partial<Facility>,
  ): Promise<Facility> {
    return await this.facilityService.createFacilities(
      new Facility(facilities),
    );
  }
}
