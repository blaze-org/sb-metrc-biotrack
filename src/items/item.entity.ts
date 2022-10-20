import { Column, Entity, ObjectID, ObjectIdColumn } from "typeorm";

export class Item{
    @ObjectIdColumn() id:ObjectID;
    @Column() name:string;
    @Column() productCategoryName:string;
    @Column() productCategoryType:number;
    @Column() quantityType:number;

    constructor(item?: Partial<Item>) {
        Object.assign(this, item);
      }
}