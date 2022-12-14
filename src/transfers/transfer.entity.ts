import { Column, Entity, ObjectID, ObjectIdColumn } from "typeorm";
import { InternalData } from "src/internalData/internaldata.entity";

@Entity('transfers')
export class Transfer{
    @ObjectIdColumn() id: ObjectID;
    @Column() manifestNumber:string;
    @Column() internalLicense:string;
    @Column() name:string;
    @Column() deliveryId:number;
    @Column() packageCount:number;
    @Column() createdDateTime:Date; 
    @Column() actualDepartureDateTime:Date;
    @Column() receivedDateTime:Date;
    @Column() recipientFacilityName:string;
    @Column() shipmentTypeName:string;
    @Column() shipmentTransactiontype:string;
    @Column() shipperFacilityLicenseNumber:string;
    @Column() shipperFacilityName:string;
    @Column() internalData:InternalData;

    constructor(transfers?: Partial<Transfer>){
        Object.assign(this, transfers);
    }
}