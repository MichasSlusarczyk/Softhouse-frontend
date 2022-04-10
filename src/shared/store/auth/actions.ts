import { createAsyncThunk } from '@reduxjs/toolkit'

import Auth, { LoginParams } from 'shared/services/auth'

const auth = new Auth()

export const loginUser = createAsyncThunk(`login`, (payload: LoginParams) =>
  auth.login(payload)
)
