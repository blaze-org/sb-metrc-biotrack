import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Between, MongoRepository } from "typeorm";
import { Package } from "./package.entity";
import { PackageRepository } from "./package.repository";

@Injectable()
export class PackageService {
    constructor(
        private readonly packageRepository: PackageRepository
    )
    {}
    async getPackages(lastModifiedStart, lastModifiedEnd): Promise<Package[]> {
        if(lastModifiedStart && lastModifiedEnd){
            return await this.packageRepository.findPackagesBetweenDate(lastModifiedStart, lastModifiedEnd);
        } else {
            return await this.packageRepository.find();
        }
    }

    async getPackageById(id): Promise<Package>{
        return await this.packageRepository.findOne(id);
    }

    async createPackage(packageModel: Package){
        return this.packageRepository.save(packageModel);
    }
}