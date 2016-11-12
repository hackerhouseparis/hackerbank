
import React, { Component } from 'react'

import 'styles/Card.scss'

class Card extends Component {

  render () {

    const { children } = this.props

    return (
      <div className='Card'>
        {children}
      </div>
    )
  }
}

export default Card
