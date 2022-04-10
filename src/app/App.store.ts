import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { reducers } from 'modules'
import { reducer as common } from 'shared/store'

const store = configureStore({
  reducer: combineReducers({ ...reducers, common }),
})

export default store

export type RootState = ReturnType<typeof store.getState>
