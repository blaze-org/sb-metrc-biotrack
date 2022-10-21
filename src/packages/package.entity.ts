
import { IsArray, IsDate, IsNotEmpty, isString, IsString, IsDateString } from "class-validator";
import { Item } from "src/items/items.entity";
import { Column, Entity, ObjectID, ObjectIdColumn } from "typeorm";

@Entity('packages')
export class Package{
    @ObjectIdColumn()_id: ObjectID;
    @Column() @IsString() Label:string;
    @Column() @IsString() PackageType:string;
    @Column() @IsDateString() PackageDate:Date;
    @Column() @IsString() UnitOfMeasureName:string;
    @Column() @IsString() UnitOfMeasureAbbreviation:string;
    @Column() @IsArray()Item:Item[];

    constructor(packages?: Partial<Package>) {
        Object.assign(this, packages);
      }
}