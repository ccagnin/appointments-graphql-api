import { Field, ObjectType } from 'type-graphql'
import { Column, Entity, Generated, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Customer } from '../../../customer/dtos/models/customer-model'


@ObjectType()
@Entity()
export class Pet {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  @Generated('uuid')
  id: string;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  type: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  breed?: string;

  @ManyToOne(() => Customer, customer => customer.pets)
  customer: Customer;
}
