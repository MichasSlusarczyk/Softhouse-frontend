import paths from 'config/paths'
import { Navigate } from 'react-router-dom'
import { useAuth } from 'shared/hooks'
import { LoginContainer } from '../../components'
import { Wrapper } from './Login.styles'

const Login = () => {
  const { data, isAuthenticated } = useAuth()
  if (isAuthenticated) return <Navigate to={paths.loggedIn} />
  console.log(data)
  return (
    <Wrapper>
      <LoginContainer title="Login" />
    </Wrapper>
  )
}

export default Login
