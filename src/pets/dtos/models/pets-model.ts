import { Field, ObjectType } from 'type-graphql'


@ObjectType()
export class Pet {
  @Field()
  id: string;
  @Field()
  name: string;
  @Field()
  type: string;
  @Field({ nullable: true })
  breed?: string;
}
