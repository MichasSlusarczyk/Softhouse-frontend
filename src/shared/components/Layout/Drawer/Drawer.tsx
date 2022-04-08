import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'
import {
  Toolbar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  DrawerProps as BaseDrawerProps,
} from '@material-ui/core'
import { ArrowBack, ArrowForward } from '@material-ui/icons'
import { ModuleRoute } from 'shared/types'
import { StyledDrawer, Divider, ListContainer } from './Drawer.style'

export interface DrawerProps extends Partial<BaseDrawerProps> {
  hidden?: boolean
  navItems: ModuleRoute[]
}

const Drawer = ({ hidden, open, onClose, navItems, ...props }: DrawerProps) => {
  const { t } = useTranslation()
  const [isOpen, setIsOpen] = useState(true)

  const toggleDrawer = () => setIsOpen(open => !open)

  if (hidden) return null
  return (
    <StyledDrawer anchor="left" variant="permanent" open={isOpen} {...props}>
      <Toolbar />
      <Divider />
      <ListContainer>
        <List disablePadding>
          {navItems.map(
            ({ path, exact, layoutSettings: { label, icon: Icon } = {} }) => (
              <ListItem
                button
                key={`item-${path}`}
                component={NavLink}
                activeClassName="Mui-selected"
                exact={exact}
                to={path}
              >
                {Icon && (
                  <ListItemIcon>
                    <Icon />
                  </ListItemIcon>
                )}
                {label && (
                  <ListItemText
                    primary={t(label)}
                    primaryTypographyProps={{ color: 'inherit' }}
                  />
                )}
              </ListItem>
            )
          )}
        </List>
        <List disablePadding>
          <ListItem button onClick={toggleDrawer}>
            <ListItemIcon>
              {isOpen ? <ArrowBack /> : <ArrowForward />}
            </ListItemIcon>
            <ListItemText
              primary={t('drawer.close')}
              primaryTypographyProps={{ color: 'inherit' }}
            />
          </ListItem>
        </List>
      </ListContainer>
    </StyledDrawer>
  )
}

export default Drawer
