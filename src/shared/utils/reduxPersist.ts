import { createTransform } from 'redux-persist'

interface Config {
  reducerKey: string
  persistedAtKeySuffix: string
  expireSeconds: number | null
  expiredState: any
}

const getPersistKey = ({ reducerKey, persistedAtKeySuffix }: Config) =>
  `${reducerKey}${persistedAtKeySuffix}`

const getPersistedAt = (config: Config) => {
  const persistedAtKey = getPersistKey(config)
  const persistedAt = localStorage.getItem(persistedAtKey)
  return persistedAt ? parseInt(persistedAt) : null
}

const setPersistedAt = (config: Config) => {
  const persistedAtKey = getPersistKey(config)
  return localStorage.setItem(persistedAtKey, new Date().getTime().toString())
}

const transformPersistence = <State = any>(
  inboundState: State = {} as State,
  config: Config
) => {
  const persistedAt = getPersistedAt(config)
  if (!persistedAt) setPersistedAt(config)
  return inboundState
}

const transformRehydrate = <State = any>(
  outboundState: State = {} as State,
  config: Config
) => {
  try {
    const persistedAt = getPersistedAt(config)
    if (config.expireSeconds && persistedAt) {
      const startTime = new Date(persistedAt).getTime()
      const endTime = new Date().getTime()

      const duration = endTime - startTime
      const seconds = duration / 1000

      if (seconds > config.expireSeconds) {
        return config.expiredState || {}
      }
    }
  } catch (error) {
  } finally {
    return outboundState
  }
}

interface Options {
  reducerKey: string
  persistedAtKeySuffix?: string
  expireSeconds?: number
  expiredState?: any
}

export function expireReducer<State = any>(options: Options) {
  const config: Config = {
    persistedAtKeySuffix: '__persisted_at',
    expireSeconds: null,
    expiredState: {},
    ...options,
  }

  return createTransform<State, State, State, State>(
    inboundState => transformPersistence(inboundState, config),
    outboundState => transformRehydrate(outboundState, config),
    {
      whitelist: [options.reducerKey],
    }
  )
}
