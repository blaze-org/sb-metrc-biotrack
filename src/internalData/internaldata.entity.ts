import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

export class InternalData{
    @Column() licenseNumber:string;
    @Column() state:string;

    constructor(internalData?: Partial<InternalData>){
        Object.assign(this, internalData);
    }
}