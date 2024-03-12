import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { HouseEntity } from './entity/house.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Utils } from 'src/utils/Utils';
import { HouseDTO } from './dto/house.dto';

@Injectable()
export class HousesService {
  constructor(
    @InjectModel('House') private readonly houseModel: Model<HouseEntity>,
    private readonly utils: Utils,
  ) {}

  async getHouses(): Promise<HouseEntity[]> {
    return this.houseModel.find();
  }

  async getHouseById(id: string): Promise<HouseEntity> {
    return this.houseModel.findById(id);
  }

  async addHouse(houseDto: HouseDTO): Promise<HouseEntity> {
    const code = this.utils.generateCode();
    const house = new this.houseModel({
      ...houseDto,
      code: code,
    });
    return house.save();
  }

  async editUser(houseDto: HouseDTO, id: string): Promise<HouseEntity> {
    const editedHouse = {
      ...houseDto,
    };
    return this.houseModel.findByIdAndUpdate({ _id: id }, editedHouse, {
      new: true,
    });
  }

  async deleteUser(id: string): Promise<boolean> {
    return this.houseModel.findByIdAndDelete({ _id: id });
  }
}
