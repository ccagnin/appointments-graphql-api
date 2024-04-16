import { Service } from 'typedi'
import { CreateAppointmentInput } from '../dtos/inputs/create-appointment-input'
import { Appointment } from '../dtos/models/appointment-model'

@Service()
export class AppointmentService {
  async createAppointment(data: CreateAppointmentInput): Promise<Appointment>{
    return {
      startsAt: data.startsAt,
      endsAt: data.endsAt
    }
  }

  async getAppointments(): Promise<Appointment[]> {
    return [
      {
        startsAt: new Date().toISOString(),
        endsAt: new Date().toISOString()
      }
    ]
  }
}
