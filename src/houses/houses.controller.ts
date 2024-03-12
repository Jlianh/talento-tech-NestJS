import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { HousesService } from './houses.service';
import { HouseDTO } from './dto/house.dto';
import { HouseEntity } from './entity/house.entity';

@Controller('houses')
export class HousesController {
  constructor(private readonly housesServices: HousesService) {}

  @Get('/allHouses')
  async getHouses(): Promise<HouseEntity[]> {
    return this.housesServices.getHouses();
  }

  @Get('/getHouseById/:id')
  async getHouseById(@Param('id') id: string): Promise<HouseEntity> {
    return this.housesServices.getHouseById(id);
  }

  @Post('/addHouse')
  async addHouse(@Body() houseDto: HouseDTO): Promise<HouseEntity> {
    return this.housesServices.addHouse(houseDto);
  }

  @Patch('/editHouse/:id')
  async editHouse(
    @Body() houseDto: HouseDTO,
    @Param('id') id: string,
  ): Promise<HouseEntity> {
    return this.housesServices.editUser(houseDto, id);
  }

  @Delete('/deleteHouse/:id')
  async deleteHouse(@Param('id') id: string): Promise<boolean> {
    return this.housesServices.deleteUser(id);
  }
}
