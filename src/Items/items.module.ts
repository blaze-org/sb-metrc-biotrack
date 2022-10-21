import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { items } from "./items.entity";
import { itemsController } from "./items.controller";
import { itemsService } from "./items.service";

@Module({
    imports: [
        TypeOrmModule.forFeature([items])
    ],
    controllers: [itemsController],
    providers: [itemsService]
})
export class itemsModule {
}