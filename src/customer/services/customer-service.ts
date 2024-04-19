import { Service } from 'typedi'
import { Repository } from 'typeorm'
import { InjectRepository } from 'typeorm-typedi-extensions'
import { Customer } from '../dtos/models/customer-model'
import { CreateCustomerInput } from '../dtos/inputs/create-customer-input'


@Service()
export class CustomerService {
  constructor(@InjectRepository(Customer) private customerService: Repository<Customer>) {}

  async createCustomer(data: CreateCustomerInput): Promise<Customer>{
    const customer = this.customerService.create(data)
    await this.customerService.save(customer)
    return customer
  }

  async getCustomers(): Promise<Customer[]> {
    return this.customerService.find()
  }
}
