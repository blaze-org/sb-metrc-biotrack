import { Body, Controller, Get, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { Package } from './package.entity';
import { PackageService } from './packages.service';

@Controller('packages')
export class PackagesController {
    constructor(
        private readonly packageService: PackageService
        ) {}
    
    @Get()
    async getPackages(): Promise<Package[]> {
        return this.packageService.getPackages();
    }

    @Post()
    async createPackage(@Body() packages: Partial<Package>): Promise<Package> {
        return await this.packageService.createPackage(new Package(packages));
    }
}
