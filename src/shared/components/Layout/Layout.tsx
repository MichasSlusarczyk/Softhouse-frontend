import paths from 'config/paths'
import { Route, Navigate, Routes } from 'react-router-dom'
import { ModalRoute } from 'shared/types'

interface LayoutProps {
  routes: ModalRoute[]
}

const Layout = ({ routes }: LayoutProps) => {
  return (
    <>
      <Routes>
        {routes.map((route, i) => (
          <Route key={`route-${i}`} path={route.path} element={route.element} />
        ))}
        <Route path="/" element={<Navigate to={paths.loginIn} />} />
      </Routes>
    </>
  )
}

export default Layout
