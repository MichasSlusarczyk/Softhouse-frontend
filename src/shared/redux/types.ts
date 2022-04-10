import { LoadingStatus } from '../types'

export interface StateObject<T> {
  data: T
  loading: LoadingStatus
  error?: string | null
}

export interface StateObjectDraft {
  setPending: <T>(stateObject: StateObject<T>) => void
  setSucceeded: <T>(stateObject: StateObject<T>, data: T) => void
  setFailed: <T>(stateObject: StateObject<T>, error?: string | null) => void
  getInitial: <T>(initialData?: T) => StateObject<T>
  reset: <T>(stateObject: StateObject<T>, initialData: T) => void
}
