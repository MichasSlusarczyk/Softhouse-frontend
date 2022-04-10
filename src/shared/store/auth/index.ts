import reducer from './reducer'
import * as actions from './actions'
import * as selectors from './selectors'

const store = { reducer, actions, selectors }

export type { State } from './reducer'
export default store
