import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity('facilities')
export class Facility {
  @ObjectIdColumn() id: ObjectID;
  @Column() HireDate: Date;
  @Column() IsOwner: boolean;
  @Column() IsManager: boolean;
  @Column() Name: string;
  @Column() Alias: string;
  @Column() DisplayName: string;
  @Column() CredentialedDate: Date;
  @Column() FacilityType: string;
  //@Column() License: Licensee; create License

  constructor(facilities?: Partial<Facility>) {
    Object.assign(this, facilities);
  }
}
