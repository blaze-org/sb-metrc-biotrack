import { InternalData } from 'src/internalData/internaldata.entity';
import { MetricTagType } from 'src/metricTagTypes/metricTagType.entity';
import { IsBoolean, IsDateString, isDateString, IsObject, IsString } from 'class-validator';
import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity('metrc_tags')
export class MetricTag {
  @ObjectIdColumn() id: ObjectID;
  @Column() @IsString() Tag: string;
  @Column() @IsString() Status: string;
  @Column() @IsDateString() Comissioned: Date;
  @Column() @IsBoolean() Used: boolean;
  @Column() @IsBoolean() Detached: boolean;
  @Column() @IsObject() MetricType: MetricTagType;
  @Column() InternalData: InternalData;

  constructor(metricTags?: Partial<MetricTag>) {
    Object.assign(this, metricTags);
  }
}
