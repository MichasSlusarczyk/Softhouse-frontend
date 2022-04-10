import { User, UserRole } from 'shared/types'
import Api from '../api'
import { LoginParams } from './Auth.types'

class Auth extends Api {
  public login = async ({ email, password }: LoginParams) => ({
    email,
    password,
    role: UserRole.Admin,
  })
}

export default Auth
