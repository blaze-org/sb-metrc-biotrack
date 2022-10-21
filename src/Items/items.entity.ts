import { Column, Entity, ObjectID, ObjectIdColumn,  } from "typeorm";

@Entity('items')
export class Item{
    @ObjectIdColumn() _id: ObjectID;
    @Column() Name: String;
    @Column() ProductCategoryName: String;
    @Column() ProductCategoryType: String;
    @Column() QuantityType: String;
    @Column() UnitOfMeasureName: String;


    constructor(items?: Partial<Item>) {
      Object.assign(this, items);
    }
}