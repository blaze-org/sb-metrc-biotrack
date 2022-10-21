import { Body, Controller, Get, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { Item } from './items.entity';
import { itemsService } from './items.service';

@Controller('items')
export class itemsController {
    constructor(
        private readonly itemsService: itemsService
        ) {}
    
    @Get()
    async getitems(): Promise<Item[]> {
        return this.itemsService.getitems();
    }

    @Post()
    async createitems(@Body() items: Partial<Item>): Promise<Item> {
        return await this.itemsService.createitems(new Item(items));
    }
}
