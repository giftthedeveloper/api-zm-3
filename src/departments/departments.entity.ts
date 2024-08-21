import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Departments {
  @Prop()
  name: string;
}

export const DepartmentsSchema = SchemaFactory.createForClass(Departments);
