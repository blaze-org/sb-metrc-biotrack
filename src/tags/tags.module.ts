import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Tag } from "./tags.entity";
import { tagsController } from "./tags.controller";
import { tagsService } from "./tags.service";

@Module({
    imports: [
        TypeOrmModule.forFeature([Tag])
    ],
    controllers: [tagsController],
    providers: [tagsService]
})
export class tagsModule {
}