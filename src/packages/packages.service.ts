import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Between, MongoRepository } from "typeorm";
import { Package } from "./package.entity";

@Injectable()
export class PackageService {
    constructor(
        @InjectRepository(Package)
        private readonly packageRepository: MongoRepository<Package>
    )
    {}
    async getPackages(lastModifiedStart, lastModifiedEnd): Promise<Package[]> {
        /*if(lastModifiedStart && lastModifiedEnd){
            const [dateComponentsStart, timeComponentsStart] = lastModifiedStart.split('T');
            const [dateComponentsEnd, timeComponentsEnd] = lastModifiedEnd.split('T');
            const [yearStart, monthStart ,dayStart] = dateComponentsStart.split('-');
            const [yearEnd, monthEnd, dayEnd] = dateComponentsEnd.split('-');
            console.log(new Date(yearStart, monthStart, dayStart));
            return await this.packageRepository.find({
                where: { 
                    packageDate: {
                        $gte: new Date(new Date(yearStart, monthStart, dayStart)),
                        $lt: new Date(new Date(yearEnd, monthEnd, dayEnd)),
                    },    
                },
                    //packageDate: { $gte: new Date(yearStart, monthStart, dayStart), $lt: new Date(yearEnd, monthEnd, dayEnd) }
            });
        } else {*/
            return await this.packageRepository.find();
        //}
    }

    async getPackageById(id): Promise<Package>{
        return await this.packageRepository.findOne(id);
    }

    async createPackage(packageModel: Package){
        return this.packageRepository.save(packageModel);
    }
}