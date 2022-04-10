import home from './home'

export const routes = [...home.routes]

export const reducers = { [home.name]: home.reducer }
