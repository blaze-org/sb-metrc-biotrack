import { Column, Entity, ObjectID, ObjectIdColumn } from "typeorm";

@Entity('tags')
export class tags{
    @ObjectIdColumn() id: ObjectID;
    @Column() label:string;
    @Column() metrcType:string;
    @Column() status:string;
    @Column() comissioned:Date;
    @Column() used:string;
    @Column() detached:string;


    constructor(tags?: Partial<tags>) {
        Object.assign(this, tags);
      }
}