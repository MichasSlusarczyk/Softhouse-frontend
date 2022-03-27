import { matchPath, useLocation } from 'react-router'
import { ModuleRoute } from 'shared/types'

export const useCurrentLayoutSettings = (routes: ModuleRoute[]) => {
  const location = useLocation()

  const currentRoute = routes.find(routeProps =>
    matchPath(location.pathname, routeProps)
  )

  return currentRoute?.layoutSettings || {}
}
