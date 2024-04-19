import { Arg, Mutation, Query, Resolver } from 'type-graphql'
import { Inject, Service } from 'typedi'
import { Customer } from '../dtos/models/customer-model'
import { CustomerService } from '../services/customer-service'
import { CreateCustomerInput } from '../dtos/inputs/create-customer-input'


@Service()
@Resolver(() => Customer)
export class CustomerResolver {
  constructor(@Inject(() => CustomerService) private customerService: CustomerService) {}

  @Query(() => [Customer])
  async customers(): Promise<Customer[]> {
    return this.customerService.getCustomers()
  }

  @Mutation(() => Customer)
  async createCustomer(@Arg('data') data: CreateCustomerInput): Promise<Customer> {
    return this.customerService.createCustomer(data)
  }
}
