import { RootState } from 'App'

export const getUser = (state: RootState) => state.common.auth.user
