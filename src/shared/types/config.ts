import { RouteProps } from 'react-router-dom'
import { UserRole } from './enums'

export interface ModalRoute extends RouteProps {
  allowedRoles?: UserRole[]
}

export interface Module<Reducer> {
  name: string
  reducer: Reducer
  routes: ModalRoute[]
}
