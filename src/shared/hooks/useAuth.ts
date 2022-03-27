import { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SignInActionPayload } from '../store/auth'
import { actions, selectors } from '../store'

export const useAuth = () => {
  const dispatch = useDispatch()
  const data = useSelector(selectors.auth.getAuth)
  const isAuthenticated = !!data.user

  const signIn = useCallback(
    (payload: SignInActionPayload) => dispatch(actions.auth.signIn(payload)),
    [dispatch]
  )

  const signOut = useCallback(
    () => dispatch(actions.auth.signOut()),
    [dispatch]
  )

  return { ...data, isAuthenticated, signIn, signOut }
}

export const useCurrentUser = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(actions.auth.getCurrentUser())
  }, [dispatch])
}
