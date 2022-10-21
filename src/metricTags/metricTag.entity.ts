import { IsBoolean, IsDateString, isDateString, IsString } from 'class-validator';
import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity('metrc_tags')
export class MetricTag {
  @ObjectIdColumn() id: ObjectID;
  @Column() @IsString() Tag: string;
  @Column() @IsString() Type: string;
  @Column() @IsString() Status: string;
  @Column() @IsDateString() Comissioned: Date;
  @Column() @IsBoolean() Used: boolean;

  constructor(metricTags?: Partial<MetricTag>) {
    Object.assign(this, metricTags);
  }
}
