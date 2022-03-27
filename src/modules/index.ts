import home from './home'
import requests from './requests'
import issues from './issues'

export const routes = [
  // Add routes below
  ...home.routes,
  ...requests.routes,
  ...issues.routes,
]

export const reducers = {
  // Add reducers below
  [home.name]: home.reducer,
  [requests.name]: requests.reducer,
  [issues.name]: issues.reducer,
}
