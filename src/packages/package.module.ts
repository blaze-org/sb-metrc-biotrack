import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Package } from "./package.entity";
import { PackageRepository } from "./package.repository";
import { PackagesController } from "./packages.controller";
import { PackageService } from "./packages.service";

@Module({
    imports: [
        TypeOrmModule.forFeature([Package])
    ],
    controllers: [PackagesController],
    providers: [PackageService, PackageRepository]
})
export class PackageModule {
}