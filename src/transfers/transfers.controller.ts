import { Body, Controller, Get, Post, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { Transfer } from "./transfer.entity"
import { TransferService } from "./transfers.service"

@Controller('transfers/v1')
export class TransfersController{
    constructor(
        private readonly transferService: TransferService
    ){}

    @Get('/outgoing')
    async getTransfers(): Promise<Transfer[]>{
        return this.transferService.getTransfers();
    }

    @Post('/external/incoming')
    async createTransfers(@Body() transfers: Partial<Transfer>): Promise<Transfer>{
        return await this.transferService.createTransfers(new Transfer(transfers));
    }
}