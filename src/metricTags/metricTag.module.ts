import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MetricTag } from './metricTag.entity';
import { MetricTagController } from './metricTag.controller';
import { MetricTagService } from './metricTag.service';
import { ExcelService } from 'src/excel/excel.service';

@Module({
  imports: [TypeOrmModule.forFeature([MetricTag])],
  controllers: [MetricTagController],
  providers: [MetricTagService, ExcelService],
})
export class MetricTagModule {}
