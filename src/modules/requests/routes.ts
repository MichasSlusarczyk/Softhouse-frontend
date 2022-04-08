import { Loadable } from 'shared/components'
import { ModuleRoute } from 'shared/types'
import { addBasePath } from 'shared/utils'

const BASE_PATH = ''

const routes: ModuleRoute[] = addBasePath(BASE_PATH, [
  {
    path: '/requests',
    exact: true,
    layoutSettings: {
      //icon: Assignment,
      label: 'navigation.requests',
    },
    component: Loadable({
      component: () => import('./pages/Requests'),
    }),
  },
])

export default routes
