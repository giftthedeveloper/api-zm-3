import {
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Departments } from './departments.entity';
import { DepartmentsService } from './departments.service';
import { CreateDepartmentDto } from './dtos/create.department.dto';

@Controller('departments')
export class DepartmentsController {
  constructor(private readonly departmentsService: DepartmentsService) {}

  @Post()
  @HttpCode(201)
  @UsePipes(ValidationPipe)
  async createDepartment(
    @Body() createDepartmentDto: CreateDepartmentDto,
  ): Promise<Departments> {
    return this.departmentsService.create(createDepartmentDto);
  }

  @Get()
  async findAllDepartments(): Promise<Departments[]> {
    return this.departmentsService.findAll();
  }
}
