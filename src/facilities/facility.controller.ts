import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { Facility } from './facility.entity';
import { FacilityService } from './facility.service';

@Controller('facilities/v1')
export class FacilityController {
  constructor(private readonly facilityService: FacilityService) {}

  @Get()
  async getFacilities(): Promise<Facility[]> {
    return this.facilityService.getFacilities();
  }

  @Post()
  @UsePipes(new ValidationPipe({whitelist: true}))
  async createFacilities(
    @Body() facilities: Facility,
  ): Promise<Facility> {
    return await this.facilityService.createFacilities(
      new Facility(facilities),
    );
  }
}
