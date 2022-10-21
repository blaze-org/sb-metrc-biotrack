import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { Item } from './items.entity';
import { ItemsService } from './items.service';

@ApiTags('Items')
@Controller('items/v1')
export class ItemsController {
    constructor(
        private readonly itemsService: ItemsService
    ) {}
    
    @Get("active")
    async getItems(): Promise<Item[]> {
        return await this.itemsService.getItems();
    }

    @Post("create")
    @ApiBody({type: Item})
    async createItems(@Body() items: Partial<Item>): Promise<Item> {
        return await this.itemsService.createItem(new Item(items));
    }
}
