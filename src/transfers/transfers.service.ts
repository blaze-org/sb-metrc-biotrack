import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { MongoRepository } from "typeorm";
import { Transfer } from "./transfer.entity";

@Injectable()
export class TransferService{
    constructor(
        @InjectRepository(Transfer)
        private readonly transferRepository: MongoRepository<Transfer>
    )
    {}

    async getTransfers(): Promise<Transfer[]> {
        return await this.transferRepository.find();
    }

    async createTransfers(transferModel: Transfer){
        return this.transferRepository.save(transferModel);
    }
}