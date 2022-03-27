import { styled, AppBar as BaseAppBar } from '@material-ui/core'

export const StyledTopbar = styled(BaseAppBar)(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
}))

export const ToolbarButtons = styled('div')(({ theme }) => ({
  display: 'flex',
  flex: 1,
  justifyContent: 'flex-end',
  alignItems: 'center',
}))
