import { User } from 'shared/types'

class Auth {
  public async signIn(email: string, password: string) {
    // TODO: Restore when Amazon Cognito is set up.
    // const user = await Amplify.signIn(email, password)
    // return this.mapUser(user)
    return { email }
  }

  public async signOut() {}

  public async getCurrentUser() {
    // const user = await Amplify.currentAuthenticatedUser()
    // return this.mapUser(user)
    return { email: 'abc@polsl.pl' }
  }

  // TODO: Extract only required fields.
  private mapUser = (user: any): User => user
}

export default Auth
