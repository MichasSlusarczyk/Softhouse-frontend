import { Module } from 'shared/types'
import routes from './routes'
import { reducer } from './store'

const MODULE_NAME = 'HOME'

const moduleConfig: Module<typeof reducer> = {
  name: MODULE_NAME,
  reducer,
  routes,
}

export default moduleConfig
