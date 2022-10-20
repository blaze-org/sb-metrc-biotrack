import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Package } from "./package.entity";
import { PackagesController } from "./packages.controller";
import { PackageService } from "./packages.service";

@Module({
    imports: [
        TypeOrmModule.forFeature([Package])
    ],
    controllers: [PackagesController],
    providers: [PackageService]
})
export class PackageModule {
}