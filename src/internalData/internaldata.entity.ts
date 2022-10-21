import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity('internalData')
export class InternalData{
    @ObjectIdColumn() id:ObjectID;
    @Column() licenseNumber:string;
    @Column() state:string;

    constructor(internalData?: Partial<InternalData>){
        Object.assign(this, internalData);
    }
}