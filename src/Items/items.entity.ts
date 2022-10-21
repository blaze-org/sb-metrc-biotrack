import { Column, Entity, ObjectID, ObjectIdColumn } from "typeorm";

@Entity('items')
export class items{
    @ObjectIdColumn() id: ObjectID;
    @Column() name:string;
    @Column() productCategoryName:string;
    @Column() productCategoryType:string;
    @Column() quantityType:string;
    @Column() unitofMeasure:string;


    constructor(items?: Partial<items>) {
        Object.assign(this, items);
      }
}