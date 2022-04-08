import { Module } from 'shared/types'
import routes from './routes'
import { reducer } from './store'
import { MODULE_NAME } from './strings'

const moduleConfig: Module<typeof MODULE_NAME, typeof reducer> = {
  name: MODULE_NAME,
  reducer,
  routes,
}

export default moduleConfig
