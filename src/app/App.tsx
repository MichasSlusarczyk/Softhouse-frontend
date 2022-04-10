import { routes } from 'modules'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { Layout } from 'shared/components'
import store from './App.store'

const App = () => {
  console.log('asdfasdf')
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout routes={routes} />
      </BrowserRouter>
    </Provider>
  )
}

export default App
