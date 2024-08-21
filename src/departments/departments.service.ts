import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Departments } from './departments.entity';
import { CreateDepartmentDto } from './dtos/create.department.dto';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class DepartmentsService {
  constructor(
    @InjectModel(Departments.name) private departmentsModel: Model<Departments>,
  ) {}

  async create(createDepartmentDto: CreateDepartmentDto): Promise<Departments> {
    const createdDepartment = new this.departmentsModel(createDepartmentDto);
    return createdDepartment.save();
  }

  async findAll(): Promise<Departments[]> {
    return this.departmentsModel.find().exec();
  }
}
