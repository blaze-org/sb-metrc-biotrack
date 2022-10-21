import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity('metrc_tags_types')
export class MetricTagType {
  @ObjectIdColumn() id: ObjectID;
  @Column() Name: string;
  @Column() Type: string;

  constructor(metricTagTypes?: Partial<MetricTagType>) {
    Object.assign(this, metricTagTypes);
  }
}
