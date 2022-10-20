import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity('metrc_tags')
export class MetricTag {
  @ObjectIdColumn() id: ObjectID;
  @Column() Tag: string;
  @Column() Type: string;
  @Column() Status: string;
  @Column() Comissioned: Date;
  @Column() Used: boolean;

  constructor(metricTags?: Partial<MetricTag>) {
    Object.assign(this, metricTags);
  }
}
