import { Service } from 'typedi'
import { Repository } from 'typeorm'
import { InjectRepository } from 'typeorm-typedi-extensions'
import { Customer } from '../dtos/models/customer-model'
import { CreateCustomerInput } from '../dtos/inputs/create-customer-input'
import { createCustomerValidator } from '../validations/customer-validator'


@Service()
export class CustomerService {
  constructor(@InjectRepository(Customer) private customerService: Repository<Customer>) {}

  async createCustomer(data: CreateCustomerInput): Promise<Customer>{
    createCustomerValidator(data)

    const existingCustomer = await this.customerService.findOne({
      where: { email: data.email }
    })
    if (existingCustomer) {
      throw new Error('Customer already exists')
    }

    const customer = this.customerService.create(data)
    await this.customerService.save(customer)
    return customer
  }

  async getCustomers(): Promise<Customer[]> {
    return this.customerService.find()
  }

  async getCustomerById(id: string): Promise<Customer> {
    const customer = await this.customerService.findOne({ where: { id } })
    if (!customer) {
      throw new Error('Customer not found')
    }
    return customer
  }
}
