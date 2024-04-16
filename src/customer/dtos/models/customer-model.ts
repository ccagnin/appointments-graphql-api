import { Field, ID, ObjectType } from 'type-graphql'
import { Column, Entity, Generated, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Appointment } from '../../../appointments/dtos/models/appointment-model'
import { Pet } from '../../../pets/dtos/models/pets-model'

@ObjectType()
@Entity()
export class Customer {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID)
  @Generated('uuid')
  id: string;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  email: string;

  @Field()
  @Column()
  phone: string;

  @OneToMany(() => Appointment, appointment => appointment.customer)
  appointments: Appointment[];

  @OneToMany(() => Pet, pet => pet.customer)
  pets: Pet[];
}
