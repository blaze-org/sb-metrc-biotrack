import { Item } from "src/items/items.entity";
import { Column, Entity, ObjectID, ObjectIdColumn } from "typeorm";

@Entity('packages')
export class Package{
    @ObjectIdColumn() _id: ObjectID;
    @Column() label:string;
    @Column() packageType:string;
    @Column() packageDate:Date;
    @Column() unitOfMeasureName:string;
    @Column() unitOfMeasureAbbreviation:string;
    @Column() item:Item[];


    constructor(packages?: Partial<Package>) {
        Object.assign(this, packages);
      }
}