import { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { StyledForm } from './LoginForm.styles'
import { useAuth } from 'shared/hooks'

const LoginForm = () => {
  const [validated, setValidated] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { signIn, isAuthenticated } = useAuth()
  console.log(isAuthenticated)

  const handleSubmit = event => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    } else {
      signIn({ email, password })
    }
    setValidated(true)
  }
  return (
    <>
      <StyledForm noValidate validated={validated} onSubmit={handleSubmit}>
        <Container fluid>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  required
                  onChange={e => setEmail(e.target.value)}
                />
                <Form.Control.Feedback type="invalid">
                  Please enter a email.
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  required
                  onChange={e => setPassword(e.target.value)}
                />
                <Form.Control.Feedback type="invalid">
                  Please enter a password.
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col className={'d-flex justify-content-center'}>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Col>
          </Row>
        </Container>
      </StyledForm>
    </>
  )
}
export default LoginForm
