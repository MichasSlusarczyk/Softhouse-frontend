import { Drawer, DrawerProps, styled, Theme } from '@material-ui/core'

export const CLOSED_DRAWER_WIDTH = 56
export const OPEN_DRAWER_WIDTH = 194

export const Divider = styled('div')(({ theme }) => ({
  height: theme.spacing(6),
  width: '100%',
}))

export const StyledDrawer = styled(Drawer)<Theme, DrawerProps>(
  ({ theme, open }) => {
    const width = open ? OPEN_DRAWER_WIDTH : CLOSED_DRAWER_WIDTH
    return {
      width,
      flexShrink: 0,
      whiteSpace: 'nowrap',
      '& .MuiDrawer-paper': {
        width,
        overflowX: 'hidden',
        color: theme.palette.common.white,
        background: theme.palette.neutral.main,
        borderRight: 'none',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
      '& .MuiListItem-gutters': {
        paddingLeft: open ? theme.spacing(3) : theme.spacing(2),
        paddingRight: open ? theme.spacing(3) : theme.spacing(2),
        transition: theme.transitions.create(
          ['padding-left', 'padding-right'],
          {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
          }
        ),
      },
      '& .MuiListItem-root': {
        color: theme.palette.secondary.dark,
        '& .MuiListItemIcon-root': {
          color: 'inherit',
        },
        '& .MuiListItemText-root': open
          ? { visibility: 'visible' }
          : { visibility: 'hidden' },
      },
      '& .Mui-selected': {
        color: theme.palette.primary.main,
        backgroundColor: theme.palette.background.default,
      },
    }
  }
)

export const ListContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  flex: 1,
}))
