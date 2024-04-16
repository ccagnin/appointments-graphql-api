import { Field, InputType } from 'type-graphql'
import { IsDateString } from 'class-validator'

@InputType()
export class CreateAppointmentInput {
  @Field()
  customerId: string;

  @Field()
  petId: string;

  @Field()
  @IsDateString()
  startsAt: string;
}
