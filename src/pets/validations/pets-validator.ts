import { CreatePetInput } from '../dtos/inputs/create-pet-input';

export function createPetValidator(data: CreatePetInput): string[] {
  const errors: string[] = [];
  if (!data.name) {
    errors.push('Name is required');
  }
  if (!data.customerId) {
    errors.push('Owner is required');
  }
  if(!data.type) {
    errors.push('Type is required');
  }
  return errors;
}
