import { Field, ObjectType } from 'type-graphql'

@ObjectType()
export class Appointment {
  @Field()
  startsAt: string;

  @Field()
  endsAt: string;
}
