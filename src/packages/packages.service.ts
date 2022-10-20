import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { MongoRepository, ObjectID } from "typeorm";
import { Package } from "./package.entity";

@Injectable()
export class PackageService {
    constructor(
        @InjectRepository(Package)
        private readonly packageRepository: MongoRepository<Package>
    )
    {}
    async getPackages(): Promise<Package[]> {
        return await this.packageRepository.find();
    }

    async getPackageById(id): Promise<Package>{
        return await this.packageRepository.findOne(id);
    }

    async createPackage(packageModel: Package){
        return this.packageRepository.save(packageModel);
    }
}