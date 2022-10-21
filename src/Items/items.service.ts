import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { MongoRepository } from "typeorm";
import { Item } from "./items.entity";

@Injectable()
export class ItemsService {
    constructor(
        @InjectRepository(Item)
        private readonly itemsRepository: MongoRepository<Item>
    ) {}

    async getItems(): Promise<Item[]> {
        return await this.itemsRepository.find();
    }

    async createItem(itemsModel: Partial<Item>): Promise<Item> {
        return await this.itemsRepository.save(itemsModel);
    }
}