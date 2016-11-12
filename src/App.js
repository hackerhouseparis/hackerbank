import React, { Component } from 'react';
import Menu from "./components/Menu"

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
      <Menu />
    )
  }
}

export default App
