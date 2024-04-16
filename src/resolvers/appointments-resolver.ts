import { Resolver, Mutation, Arg, Query, FieldResolver, Root } from 'type-graphql';
import { CreateAppointmentInput } from '../dtos/inputs/create-appointment-input'
import { Appointment } from '../dtos/models/appointment-model'
import { Customer } from '../dtos/models/customer-model'

@Resolver(() => Appointment)
export class AppointmentsResolver{

  @Query(() => [Appointment])
  async appointments() {
    return [{
      startsAt: new Date().toISOString(),
      endsAt: new Date().toISOString()
    }];
  }

  @Mutation(() => Appointment)
  async createAppointment(@Arg('data') data: CreateAppointmentInput) {
    const appointment = {
      startsAt: data.startsAt,
      endsAt: data.endsAt
    }
    return appointment;
  }

  @FieldResolver(() => Customer)
  async customer(@Root() appointment: Appointment) {
    return {
      name: 'John Doe'
    }
  }
}
