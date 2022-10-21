import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { MongoRepository } from "typeorm";
import { Tag } from "./tags.entity";

@Injectable()
export class tagsService {
    constructor(
        @InjectRepository(Tag)
        private readonly tagsRepository: MongoRepository<Tag>
    )
    {}
    async gettags(): Promise<Tag[]> {
        return await this.tagsRepository.find();
    }

    async createtags(tagsModel: Tag){
        return this.tagsRepository.save(tagsModel);
    }
}