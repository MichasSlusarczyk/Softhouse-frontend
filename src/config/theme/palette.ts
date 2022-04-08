import createPalette, {
  PaletteOptions,
} from '@material-ui/core/styles/createPalette'

declare module '@material-ui/core/styles/createPalette' {
  interface Palette {
    neutral: Palette['primary']
  }
  interface PaletteOptions {
    neutral: PaletteOptions['primary']
  }
}

const palette: PaletteOptions = {
  primary: {
    light: '#52B9C4',
    main: '#089BAB',
    dark: '#06899A',
    contrastText: '#FFF',
  },
  secondary: {
    light: '#8B8B8B',
    main: '#595959',
    dark: '#515151',
    contrastText: '#FFF',
  },
  neutral: {
    dark: '#CBCBCB',
    main: '#EBEBEB',
    light: '#F2F2F2',
    contrastText: 'rgba(0,0,0,0.8)',
  },
  background: {
    default: '#FAFAFA',
    paper: '#FFF',
  },
  text: {
    secondary: '#828282',
  },
}

export default createPalette(palette)
