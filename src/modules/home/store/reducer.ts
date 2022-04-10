import { createReducer } from '@reduxjs/toolkit'
import { LoadingStatus } from 'shared/types'

export default createReducer(
  { loading: LoadingStatus.Idle },
  builder => builder
)
