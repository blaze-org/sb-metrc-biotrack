import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { MongoRepository } from "typeorm";
import { Item } from "./items.entity";

@Injectable()
export class itemsService {
    constructor(
        @InjectRepository(Item)
        private readonly itemsRepository: MongoRepository<Item>
    )
    {}
    async getitems(): Promise<Item[]> {
        return await this.itemsRepository.find();
    }

    async createitems(itemsModel: Item){
        return this.itemsRepository.save(itemsModel);
    }
}