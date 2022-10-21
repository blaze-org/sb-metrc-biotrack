import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MetricTagType } from './metricTagType.entity';
import { MetricTagTypeController } from './metricTagType.controller';
import { MetricTagTypeService } from './metricTagType.service';

@Module({
  imports: [TypeOrmModule.forFeature([MetricTagType])],
  controllers: [MetricTagTypeController],
  providers: [MetricTagTypeService],
})
export class MetricTagTypeModule {}
