import filterConsole from 'filter-console'

const wellKnownLogs: (string | RegExp)[] = [
  /Warning: Received .+ for a non-boolean attribute/,
  /Warning: React does not recognize the .+ prop on a DOM element/,
  /Warning: findDOMNode is deprecated in StrictMode./,
]

const consoleFilter = {
  init: () => {
    if (process.env.NODE_ENV === 'development') {
      console.log(
        '%c Some of the errors could be removed due to the development mode. You can find a list of them in config/consoleFilter.ts',
        'color: #FFCC00; font-size: 12px'
      )
      filterConsole(wellKnownLogs)
    }
  },
}

export default consoleFilter
