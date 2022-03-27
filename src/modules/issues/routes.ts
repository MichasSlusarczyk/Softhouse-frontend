import { Loadable } from 'shared/components'
import { ModuleRoute } from 'shared/types'
import { addBasePath } from 'shared/utils'

const BASE_PATH = ''

const routes: ModuleRoute[] = addBasePath(BASE_PATH, [
  {
    path: '/issues',
    exact: true,
    layoutSettings: {
      //icon: Offer,
      label: 'navigation.issues',
    },
    component: Loadable({
      component: () => import('./pages/Issues'),
    }),
  },
])

export default routes
