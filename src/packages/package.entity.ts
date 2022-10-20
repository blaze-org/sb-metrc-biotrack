import { Column, Entity, ObjectID, ObjectIdColumn } from "typeorm";

@Entity('packages')
export class Package{
    @ObjectIdColumn() id: ObjectID;
    @Column() label:string;
    @Column() packageType:string;
    @Column() packageDate:Date;


    constructor(packages?: Partial<Package>) {
        Object.assign(this, packages);
      }
}