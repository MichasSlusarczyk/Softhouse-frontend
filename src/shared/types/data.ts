import { UserRole } from './enums'

export interface User {
  email: string
  password: string
  role: UserRole
}
