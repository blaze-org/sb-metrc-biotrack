import { Body, Controller, Get, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { tags } from './tags.service';
import { itemsService } from './tags.service';

@Controller('tags')
export class tagsController {
    constructor(
        private readonly tagsService: tagsService
        ) {}
    
    @Get()
    async gettags(): Promise<tags[]> {
        return this.tagsService.gettags();
    }

    @Post()
    async createtags(@Body() tags: Partial<tags>): Promise<tags> {
        return await this.tagsService.createtags(new tags(tags));
    }
}
