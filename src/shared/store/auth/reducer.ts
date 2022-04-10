import { createReducer } from '@reduxjs/toolkit'
import { StateObject, stateObject } from 'shared/redux'
import { User } from 'shared/types'
import { loginUser } from './actions'

export interface State {
  user: StateObject<User>
}

const initialState: State = {
  user: stateObject.getInitial(),
}

export default createReducer(initialState, builder =>
  builder
    .addCase(loginUser.pending, state => {
      stateObject.setPending(state.user)
    })
    .addCase(loginUser.fulfilled, (state, action) => {
      stateObject.setSucceeded(state.user, action.payload)
    })
    .addCase(loginUser.rejected, (state, action) => {
      stateObject.setFailed(state.user, action.error.message)
    })
)
