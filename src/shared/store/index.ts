import { combineReducers } from 'redux'
import auth, { State as AuthState } from './auth'

export interface CommonState {
  common: {
    auth: AuthState
  }
}

export const actions = {
  auth: auth.actions,
}

export const selectors = {
  auth: auth.selectors,
}

export const reducer = combineReducers({
  auth: auth.reducer,
})
