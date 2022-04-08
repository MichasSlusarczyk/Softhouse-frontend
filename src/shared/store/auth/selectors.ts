import type { RootState } from 'app'

export const getAuth = (state: RootState) => state.common.auth
