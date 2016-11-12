import React, { Component } from 'react'

import 'styles/App.scss'

import Balance from './components/Balance'

const Sandbox = ({ children }) => (
  <div className='Sandbox'>
    {children}
  </div>
)

class App extends Component {

  render() {

    return (
      <Sandbox>
        <Balance value='15' />
      </Sandbox>
    )
  }
}

export default App
