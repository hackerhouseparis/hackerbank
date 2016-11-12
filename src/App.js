import React, { Component } from 'react'

import 'styles/App.scss'

import SignUpForm from 'components/SignUpForm'

const Sandbox = ({ children }) => (
  <div className='Sandbox'>
    {children}
  </div>
)

class App extends Component {

  render() {

    return (
      <Sandbox>
        <SignUpForm onSubmit={v => v} />
      </Sandbox>
    )
  }
}

export default App
