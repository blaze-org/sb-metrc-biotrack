import { Column, Entity, ObjectID, ObjectIdColumn } from "typeorm";

@Entity('tags')
export class Tag{
    @ObjectIdColumn() id: ObjectID;
    @Column() label:string;
    @Column() metrcType:string;
    @Column() status:string;
    @Column() comissioned:Date;
    @Column() used:string;
    @Column() detached:string;


    constructor(tags?: Partial<Tag>) {
        Object.assign(this, tags);
      }
}