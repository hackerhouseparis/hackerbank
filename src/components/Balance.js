
import React, { Component } from 'react'
import cx from 'classnames'

import Card from 'components/Card'

import 'styles/Balance.scss'

class Balance extends Component {

  state = {
    expand: false,
    showModal: false,
  }

  open = () => {
    this.setState({ expand: true })
    setTimeout(() => this.setState({ showModal: true }), 250)
  }

  close = () => {
    this.setState({ showModal: false })
    setTimeout(() => this.setState({ expand: false }), 250)
  }

  render () {

    const { value } = this.props
    const { expand, showModal } = this.state

    console.log('expand', expand)

    return (
      <div
        onClick={!expand && this.open}
        className={cx('Balance', { expand })}>
        <div className='Balance-value-container'>
          {!expand && <span>{value}</span>}
          {expand && <i className='ion-android-arrow-back' onClick={this.close} />}
          {expand && <span className='desription'>Pick an action</span>}
          {expand && <div className={cx('Balance-Form', { showModal })}>
            <button>Shop</button>
            <button>Transfer</button>
            <button>History</button>
          </div>}
        </div>
      </div>
    )
  }
}

export default Balance
