import { Column, Entity, ObjectID, ObjectIdColumn } from "typeorm";

@Entity('transfers')
export class Transfer{
    @ObjectIdColumn() id: ObjectID;
    @Column() manifestNumber:String;

    constructor(transfers?: Partial<Transfer>){
        Object.assign(this, transfers);
    }
}