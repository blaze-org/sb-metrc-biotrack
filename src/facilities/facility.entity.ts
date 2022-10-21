import { IsBoolean, IsObject, IsString, IsDateString } from 'class-validator';
import { License } from 'src/licenses/license.entity';
import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';
@Entity('facilities')
export class Facility {
  @ObjectIdColumn() id: ObjectID;
  @Column() @IsString() HireDate: Date;
  @Column() @IsBoolean() IsOwner: boolean;
  @Column() @IsBoolean() IsManager: boolean;
  @Column() @IsString() Name: string;
  @Column() @IsString() Alias: string;
  @Column() @IsString() DisplayName: string;
  @Column() @IsDateString() CredentialedDate: Date;
  @Column() @IsString() FacilityType: string;
  @Column() @IsObject() License: License;

  constructor(facilities?: Partial<Facility>) {
    Object.assign(this, facilities);
  }
}
