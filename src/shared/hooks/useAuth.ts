import { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LoginParams } from 'shared/services'
import {
  actions as commonActions,
  selectors as commonSelectors,
} from '../store'

export const useAuth = () => {
  const dispatch = useDispatch()
  const signIn = ({ email, password }: LoginParams) =>
    dispatch(
      commonActions.auth.loginUser({
        email,
        password,
      })
    )

  const data = useSelector(commonSelectors.auth.getUser)
  const isAuthenticated = useMemo(() => !!data.data, [data.data])
  return {
    data,
    isAuthenticated,
    signIn,
  }
}
