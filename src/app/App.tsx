// import { PropsWithChildren } from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider, CssBaseline } from '@material-ui/core'
import { Layout, Loader } from 'shared/components'
import { theme } from 'config'
import { routes } from 'modules'
import { store, persistor } from './App.store'

const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <PersistGate loading={<Loader />} persistor={persistor}>
        <BrowserRouter>
          <Layout routes={routes} />
        </BrowserRouter>
      </PersistGate>
    </ThemeProvider>
  </Provider>
)

export default App
