import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Departments {
  @Prop({ unique: true })
  name: string;
}

export const DepartmentsSchema = SchemaFactory.createForClass(Departments);
