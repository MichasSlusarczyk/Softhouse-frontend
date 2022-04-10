import React, { PropsWithChildren } from 'react'
import LoginForm from '../LoginForm'
import { Wrapper } from './LoginContainer.styles'

interface LoginContainerProps {
  title: string
}

const LoginContainer = ({
  title,
  children,
}: PropsWithChildren<LoginContainerProps>) => {
  return (
    <Wrapper>
      <h1>{title}</h1>
      {/* <Error/> */}
      <LoginForm />
    </Wrapper>
  )
}

export default LoginContainer
