import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { MongoRepository } from "typeorm";
import { items } from "./items.entity";

@Injectable()
export class itemsService {
    constructor(
        @InjectRepository(items)
        private readonly itemsRepository: MongoRepository<items>
    )
    {}
    async getitems(): Promise<items[]> {
        return await this.itemsRepository.find();
    }

    async createPackage(itemsModel: items){
        return this.itemsRepository.save(itemsModel);
    }
}