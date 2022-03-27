import { paths } from 'config'
import { Loadable } from 'shared/components'
import { ModuleRoute } from 'shared/types'

const routes: ModuleRoute[] = [
  {
    path: paths.signIn,
    exact: true,
    public: true,
    layoutSettings: {
      drawerProps: { hidden: true },
      topbarProps: { hidden: true },
    },
    component: Loadable({
      component: () => import('./pages/Login'),
    }),
  },
]

export default routes
