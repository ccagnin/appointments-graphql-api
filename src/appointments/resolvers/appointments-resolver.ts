import { Resolver, Mutation, Arg, Query, FieldResolver, Root } from 'type-graphql';
import { CreateAppointmentInput } from '../dtos/inputs/create-appointment-input'
import { Appointment } from '../dtos/models/appointment-model'
import { Customer } from '../../customer/dtos/models/customer-model'
import { AppointmentService } from '../services/appointment-service'
import { Inject, Service } from 'typedi'

@Service()
@Resolver(() => Appointment)
export class AppointmentsResolver{
  constructor(@Inject(() => AppointmentService)
    private readonly appointmentsService: AppointmentService) {}

  @Query(() => [Appointment])
  async appointments(): Promise<Appointment[]>{
    return this.appointmentsService.getAppointments();
  }

  @Mutation(() => Appointment)
  async createAppointment(@Arg('data') data: CreateAppointmentInput): Promise<Appointment>{
    return this.appointmentsService.createAppointment(data);
  }

  @FieldResolver(() => Customer)
  async customer(@Root() appointment: Appointment) {
    return {
      name: 'John Doe'
    }
  }
}
