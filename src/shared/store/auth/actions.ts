import { createAsyncThunk } from '@reduxjs/toolkit'
import { NAMESPACE } from 'shared/strings'
import { Auth } from 'shared/services'

const auth = new Auth()

export const signIn = createAsyncThunk(
  `${NAMESPACE}/signIn`,
  ({ email, password }: { email: string; password: string }) =>
    auth.signIn(email, password)
)

export const signOut = createAsyncThunk(`${NAMESPACE}/signOut`, () =>
  auth.signOut()
)

export const getCurrentUser = createAsyncThunk(
  `${NAMESPACE}/getCurrentUser`,
  () => auth.getCurrentUser()
)
