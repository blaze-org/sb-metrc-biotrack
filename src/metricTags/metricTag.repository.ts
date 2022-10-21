import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { MongoRepository } from "typeorm";
import { MetricTag } from "./metricTag.entity";


@Injectable()
export class MetricTagRepository extends MongoRepository<MetricTag>{
    constructor(
        @InjectRepository(MetricTag)
          repository: MongoRepository<MetricTag>
      ) {
        super(repository.target, repository.manager, repository.queryRunner);
      }

      async findMetricTagsBetweenDate(dateStart, dateEnd): Promise<MetricTag[]> {
        return await this.find({
            where: { 
                packageDate: {
                    $gte: dateStart,
                    $lt: dateEnd,
                },    
            }
        });
    }
}