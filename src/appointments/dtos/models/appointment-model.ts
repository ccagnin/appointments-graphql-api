import { Field, ID, ObjectType } from 'type-graphql'
import { Column, Entity, Generated, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Customer } from '../../../customer/dtos/models/customer-model'

@ObjectType()
@Entity()
export class Appointment {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID)
  @Generated('uuid')
  id: string;

  @Field()
  @Column()
  startsAt: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  endsAt?: string;

  @ManyToOne(() => Customer, customer => customer.appointments)
  customer: Customer;
}
