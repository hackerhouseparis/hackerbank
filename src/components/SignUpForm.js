
import React, { Component } from 'react'

import 'styles/SignUpForm.scss'

import Card from 'components/Card'

class SignUpForm extends Component {

  state = {
    email: '',
    password: '',
    confirm: '',
    error: null,
  }

  onChange = field => ({ target: { value } }) => this.setState({ [field]: value })

  onSubmit = () => {
    const { email, password, confirm } = this.state

    if (password !== confirm) {
      return this.setState({ error: 'Passwords does not match' })
    }

    this.setState({ error: null })

    return this.props.onSubmit(email, password)
  }

  render () {

    const { email, password, confirm, error } = this.state

    return (
      <Card>
        <form onSubmit={() => console.log('ok')}>
          <div className='SignUpForm'>
            <p className='title'>Sign Up.</p>

            <div className='error'>
              {error &&
                <p>{error}</p>}
            </div>

            <div className='fields'>
              <div className='row'>
                <span className='label'>Email</span>
                <input onChange={this.onChange('email')} />
              </div>
              <div className='row'>
                <span className='label'>Password</span>
                <input type='password' onChange={this.onChange('password')} />
              </div>

              <div className='row'>
                <span className='label'>Confirm your Password</span>
                <input type='password' onChange={this.onChange('confirm')} />
              </div>

              <br />

              <Card>
                <div className='row no-margin'>
                  <input readOnly type='sumbmit' className='Submit-button' value='Submit' />
                </div>
              </Card>
            </div>
          </div>
        </form>
      </Card>
    )
  }
}

export default SignUpForm
