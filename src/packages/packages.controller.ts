import { Body, Controller, Get, Param, Post } from '@nestjs/common';
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

    @Get('/:id')
    async getPackageById(@Param('id') id): Promise<Package> {
         return await this.packageService.getPackageById(id);
    }

    @Post()
    async createPackage(@Body() packages: Partial<Package>): Promise<Package> {
        return await this.packageService.createPackage(new Package(packages));
    }
}
