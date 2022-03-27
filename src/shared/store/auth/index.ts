import reducer from './reducer'
import * as actions from './actions'
import * as selectors from './selectors'

const store = { actions, reducer, selectors }

export * from './actions.types'
export default store
