import { Theme, createTheme } from '@material-ui/core'
import props from './props'
import palette from './palette'
import overrides from './overrides'
import typography from './typography'
import spacing from './spacing'

const theme: Theme = createTheme({
  props,
  palette,
  overrides,
  typography,
  spacing,
})

export default theme
