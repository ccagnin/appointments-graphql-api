import { Field, InputType } from 'type-graphql'
import { IsEmail } from 'class-validator'

@InputType()
export class CreateCustomerInput {
  @Field()
  name: string;

  @Field()
  @IsEmail()
  email: string;

  @Field()
  phone: string;
}
