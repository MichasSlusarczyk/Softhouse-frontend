import { Box } from '@material-ui/core'
import { Redirect } from 'react-router'
import { paths } from 'config'
import { useAuth } from 'shared/hooks'
import { LoginForm } from '../components'

const Login = () => {
  const { isAuthenticated } = useAuth()
  if (isAuthenticated) return <Redirect to={paths.dashboard} />
  return (
    <Box paddingTop={5}>
      <LoginForm />
    </Box>
  )
}

export default Login
