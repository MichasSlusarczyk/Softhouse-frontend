import { AppBarProps, IconButton, Toolbar } from '@material-ui/core'
import { ExitToApp } from '@material-ui/icons'
import { useAuth } from 'shared/hooks'
import { StyledTopbar, ToolbarButtons } from './Topbar.style'

export interface TopbarProps extends Partial<AppBarProps> {
  hidden?: boolean
  shifted: boolean
  onMenuButtonClick: () => void
  menuButtonHidden?: boolean
}

const Topbar = ({
  hidden,
  shifted,
  onMenuButtonClick,
  menuButtonHidden,
  ...props
}: TopbarProps) => {
  const { isAuthenticated, signOut } = useAuth()

  if (hidden) return null
  return (
    <StyledTopbar position="fixed" color="primary" {...props}>
      <Toolbar>
        <ToolbarButtons>
          {isAuthenticated && (
            <IconButton edge="start" color="inherit" onClick={signOut}>
              <ExitToApp />
            </IconButton>
          )}
        </ToolbarButtons>
      </Toolbar>
    </StyledTopbar>
  )
}

export default Topbar
