import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity('licenses')
export class License {
  @ObjectIdColumn() id: ObjectID;
  @Column() Number: string;
  @Column() StartDate: Date;
  @Column() EndDate: Date;
  @Column() LicenseType: string;

  constructor(licenses?: Partial<License>) {
    Object.assign(this, licenses);
  }
}
