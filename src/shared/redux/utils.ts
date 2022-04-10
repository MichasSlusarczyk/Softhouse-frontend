import { LoadingStatus } from '../types'
import { StateObject, StateObjectDraft } from './types'

const setPending = <T>(stateObject: StateObject<T>) => {
  stateObject.loading = LoadingStatus.Pending
  stateObject.error = null
}

const setSucceeded = <T>(stateObject: StateObject<T>, data: T) => {
  stateObject.loading = LoadingStatus.Succeeded
  stateObject.data = data
}

const setFailed = <T>(stateObject: StateObject<T>, error?: string | null) => {
  stateObject.loading = LoadingStatus.Succeeded
  stateObject.error = error
}

const getInitial = <T>(initialData?: T): StateObject<T> => ({
  loading: LoadingStatus.Idle,
  data: initialData as T,
  error: null,
})

const reset = <T>(stateObject: StateObject<T>, initialData: T) => {
  stateObject.loading = LoadingStatus.Succeeded
  stateObject.data = initialData
  stateObject.error = null
}

const stateObject: StateObjectDraft = {
  setPending,
  setSucceeded,
  setFailed,
  getInitial,
  reset,
}

export default stateObject
