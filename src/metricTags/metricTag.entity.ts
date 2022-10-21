import { InternalData } from 'src/internalData/internaldata.entity';
import { MetricTagType } from 'src/metricTagTypes/metricTagType.entity';
import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity('metrc_tags')
export class MetricTag {
  @ObjectIdColumn() id: ObjectID;
  @Column() Tag: string;
  @Column() Status: string;
  @Column() Comissioned: Date;
  @Column() Used: boolean;
  @Column() Detached: boolean;
  @Column() MetricType: MetricTagType;
  @Column() InternalData: InternalData;

  constructor(metricTags?: Partial<MetricTag>) {
    Object.assign(this, metricTags);
  }
}
