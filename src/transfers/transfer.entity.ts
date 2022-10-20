import { Column, Entity, ObjectID, ObjectIdColumn } from "typeorm";

@Entity('transfers')
export class Transfer{
    @ObjectIdColumn() id: ObjectID;
    @Column() manifestNumber:string;
    @Column() name:string;

    constructor(transfers?: Partial<Transfer>){
        Object.assign(this, transfers);
    }
}