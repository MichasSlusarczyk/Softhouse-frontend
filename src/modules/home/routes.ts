import paths from 'config/paths'
import Loadable from 'shared/components'
import { ModalRoute } from 'shared/types'

const routes: ModalRoute[] = [
  {
    path: paths.loginIn,
    element: Loadable({
      component: () => import('./pages/Login/Login'),
    }),
  },
  {
    path: paths.loggedIn,
    element: Loadable({ component: () => import('./pages/Temporary') }),
  },
]

export default routes
