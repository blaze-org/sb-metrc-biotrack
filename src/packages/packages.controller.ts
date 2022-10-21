import { Body, Controller, Get, Param, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { Package } from './package.entity';
import { PackageService } from './packages.service';

@Controller('packages')
export class PackagesController {
    constructor(
        private readonly packageService: PackageService
        ) {}
    
    @Get('/v1/active')
    async getPackages(@Query('licenseNumber')licenseNumber, @Query('lastModifiedStart')lastModifiedStart, 
        @Query('lastModifiedEnd')lastModifiedEnd): Promise<Package[]> {

        return this.packageService.getPackages(lastModifiedStart, lastModifiedEnd);
    }

    @Get('/v1/:id')
    async getPackageById(@Param('id') id, @Query('licenseNumber')licenseNumber): Promise<Package> {
         return await this.packageService.getPackageById(id);
    }

    @Post()
    @UsePipes(new ValidationPipe({whitelist: true}))
    async createPackage(@Body() packages: Package): Promise<Package> {
        return await this.packageService.createPackage(new Package(packages));
    }
}
