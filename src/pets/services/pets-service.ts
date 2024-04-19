import { Service } from 'typedi'
import { Repository } from 'typeorm'
import { InjectRepository } from 'typeorm-typedi-extensions'
import { Pet } from '../dtos/models/pets-model'
import { CreatePetInput } from '../dtos/inputs/create-pet-input'


@Service()
export class PetsService{
  constructor(@InjectRepository(Pet) private petRepository: Repository<Pet>){}

  async createPet(data: CreatePetInput): Promise<Pet>{
    const pet = this.petRepository.create(data)
    await this.petRepository.save(pet)
    return pet
  }

  async getPets(): Promise<Pet[]>{
    return this.petRepository.find()
  }
}
