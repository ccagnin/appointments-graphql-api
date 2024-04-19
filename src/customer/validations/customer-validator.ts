import { CreateCustomerInput } from '../dtos/inputs/create-customer-input'


export function createCustomerValidator(data: CreateCustomerInput): string[] {
  const errors: string[] = []
  if (!data.name) {
    errors.push('Name is required')
  }
  if (!data.email) {
    errors.push('Email is required')
  } else {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(data.email)) {
      errors.push('Invalid email')
    }
  }
  if (!data.phone) {
    errors.push('Phone is required')
  }
  return errors
}
