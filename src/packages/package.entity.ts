import { IsArray, IsDate, IsNotEmpty, isString, IsString, IsDateString } from "class-validator";
import { Item } from "src/items/item.entity";
import { Column, Entity, ObjectID, ObjectIdColumn } from "typeorm";

@Entity('packages')
export class Package{
    @ObjectIdColumn()_id: ObjectID;
    @Column() @IsString() label:string;
    @Column() @IsString() packageType:string;
    @Column() @IsDateString() packageDate:Date;
    @Column() @IsString() unitOfMeasureName:string;
    @Column() @IsString() unitOfMeasureAbbreviation:string;
    @Column() @IsArray()item:Item[];

    constructor(packages?: Partial<Package>) {
        Object.assign(this, packages);
      }
}