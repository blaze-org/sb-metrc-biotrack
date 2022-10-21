import { Column, Entity, ObjectID, ObjectIdColumn } from "typeorm";

@Entity('items')
export class Item{
    @ObjectIdColumn() id: ObjectID;
    @Column() name:string;
    @Column() productCategoryName:string;
    @Column() productCategoryType:string;
    @Column() quantityType:string;
    @Column() unitofMeasure:string;


    constructor(items?: Partial<Item>) {
        Object.assign(this, items);
      }
}