import { Body, Controller, Get, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { Tag } from './tags.entity';
import { tagsService } from './tags.service';

@Controller('tags')
export class tagsController {
    constructor(
        private readonly tagsService: tagsService
        ) {}
    
    @Get()
    async gettags(): Promise<Tag[]> {
        return this.tagsService.gettags();
    }

    @Post()
    async createtags(@Body() tags: Partial<Tag>): Promise<Tag> {
        return await this.tagsService.createtags(new Tag(tags));
    }
}
