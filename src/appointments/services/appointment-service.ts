import { Service } from 'typedi'
import { CreateAppointmentInput } from '../dtos/inputs/create-appointment-input'
import { Appointment } from '../dtos/models/appointment-model'
import { Repository } from 'typeorm'
import { InjectRepository } from 'typeorm-typedi-extensions'

@Service()
export class AppointmentService {
  constructor(
    @InjectRepository(Appointment)
    private appointmentRepository: Repository<Appointment>) {}

  async createAppointment(data: CreateAppointmentInput): Promise<Appointment>{
    const appointment = this.appointmentRepository.create(data)
    await this.appointmentRepository.save(appointment)
    return appointment
  }

  async getAppointments(): Promise<Appointment[]> {
    return this.appointmentRepository.find()
  }
}

