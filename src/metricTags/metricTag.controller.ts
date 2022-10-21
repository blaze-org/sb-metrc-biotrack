import { Body, Controller, Get, Header, Post, Res } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ExcelService } from 'src/excel/excel.service';
import { MongoRepository } from 'typeorm';
import { MetricTag } from './metricTag.entity';
import { Response } from 'express';
import { MetricTagService } from './metricTag.service';
import { Logger } from '@nestjs/common';

@Controller('metricTags')
export class MetricTagController {
  constructor(
    private readonly metricTagService: MetricTagService,
    private excelService:ExcelService
    ) {}

  @Get()
  async getMetricTags(): Promise<MetricTag[]> {
    return this.metricTagService.getMetricTags();
  }

  @Post()
  async createMetricTags(
    @Body() metricTags: Partial<MetricTag>,
  ): Promise<MetricTag> {
    return await this.metricTagService.createMetricTags(
      new MetricTag(metricTags),
    );
  }

  @Get('/download')
  @Header('Content-Type', 'text/csv')
  async exportCSV(@Res() res: Response){
    let data = await this.metricTagService.getMetricTags()
    Promise.all(data).then(async (values) => {
      let result = await this.excelService.downloadExcel(values)
      res.download(`${result}`)
    });
  }
}
