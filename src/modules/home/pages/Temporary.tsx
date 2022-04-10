import React from 'react'
import { useAuth } from 'shared/hooks'

const Temporary = () => {
  const { data } = useAuth()
  const { email, password } = data.data
  return <h1>{`Hello, your email: ${email} your password: ${password}`}</h1>
}

export default Temporary
