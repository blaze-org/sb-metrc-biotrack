import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PackageModule } from './packages/package.module';
import { FacilityModule } from './facilities/facility.module';
import { MetricTagModule } from './metricTags/metricTag.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TransferModule } from './transfers/transfer.module';
import { ItemsModule } from './Items/items.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb+srv://admin:jtkdfMEbxDADF7H6@sb-metrc-biotrack.qilidz4.mongodb.net/sb-metrc-biotrack',
      database: 'sb-metrc-biotrack',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      ssl: true,
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }),
    ItemsModule,
    PackageModule,
    FacilityModule,
    MetricTagModule,
    TransferModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
