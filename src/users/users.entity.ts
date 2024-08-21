import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';

@Schema()
export class Users {
  @Prop()
  name: string;

  @Prop({ unique: true })
  email: string;
  
  @Prop({ unique: true })
  phone: string;

  @Prop()
  gender: string;

  @Prop({ type: Types.ObjectId, ref: 'Departments' })
  department: Types.ObjectId;
}

export const UsersSchema = SchemaFactory.createForClass(Users);
