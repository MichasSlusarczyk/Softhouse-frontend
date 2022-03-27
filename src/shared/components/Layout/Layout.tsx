import { useState } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { SvgIconComponent } from '@material-ui/icons'
import { paths } from 'config'
import { ModuleRoute } from 'shared/types'
import PrivateRoute from '../PrivateRoute'
import Topbar from './Topbar'
import Drawer from './Drawer'
import { Container, Content } from './Layout.style'
import { useCurrentLayoutSettings } from './Layout.utils'
import { Toolbar } from '@material-ui/core'

export interface LayoutNavItem {
  path: string
  label: string
  icon?: SvgIconComponent
}

export interface LayoutProps {
  routes: ModuleRoute[]
  hideDrawer?: boolean
  hideTopbar?: boolean
}

const Layout = ({ routes }: LayoutProps) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(true)
  const { drawerProps = {}, topbarProps = {} } =
    useCurrentLayoutSettings(routes)

  const navItems = routes.filter(
    ({ layoutSettings: { label, icon } = {} }) => label || icon
  )

  const openDrawer = () => setIsDrawerOpen(true)
  const closeDrawer = () => setIsDrawerOpen(false)

  return (
    <Container>
      <Topbar
        shifted={!drawerProps.hidden && isDrawerOpen}
        menuButtonHidden={drawerProps.hidden}
        onMenuButtonClick={openDrawer}
        {...topbarProps}
      />
      <Drawer
        open={isDrawerOpen}
        navItems={navItems}
        onClose={closeDrawer}
        {...drawerProps}
      />
      <Content>
        {!topbarProps.hidden && <Toolbar />}
        <Switch>
          {routes.map(route =>
            route.public ? (
              <Route key={`publicRoute-${route.path}`} {...route} />
            ) : (
              <PrivateRoute key={`privateRoute-${route.path}`} {...route} />
            )
          )}
          <Route component={() => <Redirect to={paths.signIn} />} />
        </Switch>
      </Content>
    </Container>
  )
}

export default Layout
