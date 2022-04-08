import { createReducer } from '@reduxjs/toolkit'
import config from 'config'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { LoadingStatus, User } from 'shared/types'
import { expireReducer } from 'shared/utils'
import { getCurrentUser, signIn, signOut } from './actions'

interface State {
  user: User | null
  loading: LoadingStatus
  error?: string | null
}

const initialState: State = {
  user: null,
  loading: LoadingStatus.Idle,
  error: null,
}

const reducer = createReducer(initialState, builder =>
  builder
    .addCase(signIn.pending, state => {
      state.loading = LoadingStatus.Pending
      state.error = null
    })
    .addCase(signIn.fulfilled, (state, action) => {
      state.user = action.payload
      state.loading = LoadingStatus.Succeeded
    })
    .addCase(signIn.rejected, (state, action) => {
      state.user = null
      state.loading = LoadingStatus.Failed
      state.error = action.error.message
    })
    .addCase(signOut.pending, state => {
      state.loading = LoadingStatus.Pending
      state.error = null
    })
    .addCase(signOut.fulfilled, state => {
      state.user = null
      state.loading = LoadingStatus.Succeeded
    })
    .addCase(signOut.rejected, (state, action) => {
      state.loading = LoadingStatus.Failed
      state.error = action.error.message
    })
    .addCase(getCurrentUser.pending, state => {
      state.loading = LoadingStatus.Pending
      state.error = null
    })
    .addCase(getCurrentUser.fulfilled, (state, action) => {
      state.user = action.payload
      state.loading = LoadingStatus.Succeeded
    })
    .addCase(getCurrentUser.rejected, (state, action) => {
      state.user = null
      state.loading = LoadingStatus.Failed
      state.error = action.error.message
    })
)

export default persistReducer(
  {
    storage,
    key: 'auth',
    whitelist: ['user'],
    transforms: [
      expireReducer<State>({
        reducerKey: 'user',
        expireSeconds: config.sessionLength,
        expiredState: initialState.user,
      }),
    ],
  },
  reducer
)
