import { Injectable } from "@nestjs/common";
import { InjectRepository, TypeOrmModule } from "@nestjs/typeorm";
import { DataSource, MongoRepository } from "typeorm";
import { Package } from "./package.entity";

@Injectable()
export class PackageRepository extends MongoRepository<Package>{
    constructor(
        @InjectRepository(Package)
          repository: MongoRepository<Package>
      ) {
        super(repository.target, repository.manager, repository.queryRunner);
      }

    async findPackagesBetweenDate(lastModifiedStart, lastModifiedEnd): Promise<Package[]> {
        return await this.find({
            where: { 
                packageDate: {
                    $gte: lastModifiedStart,
                    $lt: lastModifiedEnd,
                },    
            }
        });
    }
}