import React, { Component } from 'react'
import InvisionTheme from 'assets/InvisionTheme'
import { ThemeProvider } from 'styled-components'
import { Home } from './components/Home'

class App extends Component {
  constructor(props) {
    super(props)

    let isDev = !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
    if (isDev) {
      // TODO: CONFIG IN DEV MODE
    } else {
      window['console']['log'] = function() {}
    }
  }
  render() {
    return (
      <ThemeProvider theme={InvisionTheme}>
        <div className="App">
          <Home />
        </div>
      </ThemeProvider>
    )
  }
}

export default App
