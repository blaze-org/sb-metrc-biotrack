import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Transfer } from "./transfer.entity"
import { TransfersController } from "./transfers.controller"
import { TransferService } from "./transfers.service"

@Module({
    imports: [
        TypeOrmModule.forFeature([Transfer])
    ],
    controllers: [TransfersController],
    providers: [TransferService]
})
export class TransferModule{
}