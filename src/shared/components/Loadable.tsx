import { lazy, Suspense } from 'react'
import { Spinner } from 'react-bootstrap'

interface LoadableProps {
  component(): Promise<{ default: React.ComponentType<any> }>
}

const Loadable = ({ component }: LoadableProps) => {
  const Component = lazy(component)
  return (
    <Suspense fallback={<Spinner animation="border" variant="primary" />}>
      <Component />
    </Suspense>
  )
}

export default Loadable
