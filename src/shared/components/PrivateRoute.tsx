import { Redirect, Route, RouteProps } from 'react-router-dom'
import { paths } from 'config'
import { useAuth } from 'shared/hooks'
import { LoadingStatus } from 'shared/types'

const PrivateRoute = (props: RouteProps) => {
  const { isAuthenticated, loading } = useAuth()
  return isAuthenticated || loading === LoadingStatus.Pending ? (
    <Route {...props} />
  ) : (
    <Redirect to={paths.signIn} />
  )
}

export default PrivateRoute
