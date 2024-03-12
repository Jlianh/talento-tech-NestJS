import { Module } from '@nestjs/common';
import { HousesService } from './houses.service';
import { HousesController } from './houses.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { HouseSchema } from './houses.schema';
import { Utils } from 'src/utils/Utils';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'House', schema: HouseSchema }])],
  providers: [HousesService, Utils],
  controllers: [HousesController],
})
export class HousesModule {}
