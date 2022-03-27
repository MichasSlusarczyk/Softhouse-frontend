import { Overrides } from '@material-ui/core/styles/overrides'
import spacing from './spacing'

const overrides: Overrides = {
  MuiCssBaseline: {
    '@global': {
      '*': {
        '&:focus': {
          outline: 'none',
        },
      },
      '#root': {
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      },
      a: {
        textDecoration: 'none',
      },
    },
  },
  MuiListItemIcon: {
    root: {
      minWidth: spacing(4),
    },
  },
}

export default overrides
