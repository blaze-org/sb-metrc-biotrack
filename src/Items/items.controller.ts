import { Body, Controller, Get, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { items } from './items.service';
import { itemsService } from './items.service';

@Controller('items')
export class itemsController {
    constructor(
        private readonly itemsService: itemsService
        ) {}
    
    @Get()
    async getitems(): Promise<items[]> {
        return this.itemsService.getitems();
    }

    @Post()
    async createitems(@Body() items: Partial<items>): Promise<items> {
        return await this.itemsService.createitems(new items(items));
    }
}
