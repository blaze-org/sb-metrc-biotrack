import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { tags } from "./tags.entity";
import { tagsController } from "./tags.controller";
import { tagsService } from "./tags.service";

@Module({
    imports: [
        TypeOrmModule.forFeature([tags])
    ],
    controllers: [tagsController],
    providers: [tagsService]
})
export class tagsModule {
}