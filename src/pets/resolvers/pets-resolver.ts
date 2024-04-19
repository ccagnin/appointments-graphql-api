import { Arg, Field, FieldResolver, Mutation, Query, Resolver, Root } from 'type-graphql'
import { Inject, Service } from 'typedi'
import { Pet } from '../dtos/models/pets-model'
import { PetsService } from '../services/pets-service'
import { CreatePetInput } from '../dtos/inputs/create-pet-input'
import { Customer } from '../../customer/dtos/models/customer-model'
import { CustomerService } from '../../customer/services/customer-service'


@Service()
@Resolver(() => Pet)
export class PetResolver {
  constructor(@Inject(() => PetsService) private readonly petService: PetsService,
              @Inject(() => CustomerService) private readonly customerService: CustomerService) {}

  @Mutation(() => Pet)
  async createPet(@Arg('data') data: CreatePetInput): Promise<Pet> {
    return this.petService.createPet(data)
  }

  @Query(() => [Pet])
  async pets(): Promise<Pet[]> {
    return this.petService.getPets()
  }

  @FieldResolver(() => Customer)
  async customer(@Root() pet: Pet): Promise<Customer> {
    return this.customerService.getCustomerById(pet.customer.id)
  }
}
