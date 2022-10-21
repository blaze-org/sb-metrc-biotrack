import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Item } from "./items.entity";
import { itemsController } from "./items.controller";
import { itemsService } from "./items.service";

@Module({
    imports: [
        TypeOrmModule.forFeature([Item])
    ],
    controllers: [itemsController],
    providers: [itemsService]
})
export class itemsModule {
}