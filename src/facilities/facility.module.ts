import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Facility } from './facility.entity';
import { FacilityController } from './facility.controller';
import { FacilityService } from './facility.service';

@Module({
  imports: [TypeOrmModule.forFeature([Facility])],
  controllers: [FacilityController],
  providers: [FacilityService],
})
export class FacilityModule {}
