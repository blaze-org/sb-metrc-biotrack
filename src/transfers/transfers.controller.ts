import { Body, Controller, Get, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { Transfer } from "./transfer.entity"
import { TransferService } from "./transfers.service"

@Controller('transfers')
export class TransfersController{
    constructor(
        private readonly transferService: TransferService
    ){}

    @Get()
    async getTransfers(): Promise<Transfer[]>{
        return this.transferService.getTransfers();
    }

    @Post()
    async createTransfers(@Body() transfers: Partial<Transfer>): Promise<Transfer>{
        return await this.transferService.createTransfers(new Transfer(transfers));
    }
}