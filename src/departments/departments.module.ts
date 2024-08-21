import { Module } from '@nestjs/common';
import { DepartmentsService } from './departments.service';
import { DepartmentsController } from './departments.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { DepartmentsSchema } from './departments.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Departments', schema: DepartmentsSchema },
    ]),
  ],
  providers: [DepartmentsService],
  controllers: [DepartmentsController],
})
export class DepartmentsModule {}
