import { Body, Controller, Get, Header, Post, Query, Res, UsePipes, ValidationPipe } from '@nestjs/common';
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
  @UsePipes(new ValidationPipe({whitelist: true}))
  async createMetricTags(
    @Body() metricTags: MetricTag,
  ): Promise<MetricTag> {
    return await this.metricTagService.createMetricTags(
      new MetricTag(metricTags),
    );
  }

  @Get('/export')
  @Header('Content-Type', 'text/csv')
  async exportCSV(@Res() res: Response, @Query('licenseNumber')licenseNumber, @Query('type')type, 
        @Query('dateStart')dateStart, @Query('dateEnd')dateEnd){
    let data = await this.metricTagService.getMetricTagsBetweenDate(dateStart, dateEnd)
    Promise.all(data).then(async (values) => {
      let result = await this.excelService.downloadExcel(values)
      res.download(`${result}`)
    });
  }
}
