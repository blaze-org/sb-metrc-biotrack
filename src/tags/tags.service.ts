import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { MongoRepository } from "typeorm";
import { tags } from "./tags.entity";

@Injectable()
export class tagsService {
    constructor(
        @InjectRepository(tags)
        private readonly tagsRepository: MongoRepository<tags>
    )
    {}
    async gettags(): Promise<tags[]> {
        return await this.tagsRepository.find();
    }

    async createtags(tagsModel: tags){
        return this.tagsRepository.save(tagsModel);
    }
}