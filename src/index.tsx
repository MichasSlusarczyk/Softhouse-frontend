import { StrictMode, Suspense } from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Spinner } from 'react-bootstrap'

ReactDOM.render(
  <StrictMode>
    <Suspense fallback={<Spinner animation="border" variant="primary" />}>
      <App />
    </Suspense>
  </StrictMode>,
  document.getElementById('root')
)
