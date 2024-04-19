import { Field, InputType } from 'type-graphql'

@InputType()
export class CreatePetInput {
  @Field()
  name: string;

  @Field()
  type: string;

  @Field({ nullable: true })
  breed?: string;

  @Field()
  customerId: string;
}
