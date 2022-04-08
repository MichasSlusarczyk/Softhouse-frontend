import env from './env'

const DAY_SECONDS = 24 * 60 * 60

const config = <const>{
  ...env,
  sessionLength: DAY_SECONDS,
}

export default config
export { default as i18n } from './i18n'
export { default as consoleFilter } from './consoleFilter'
export { default as theme } from './theme'
export { default as paths } from './paths'
