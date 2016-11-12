import React, { Component } from 'react'

import 'styles/Menu.scss'

class Menu extends Component {

  state = {active : null}

  setActive = (item) => () => this.setState({active : item})

  render() {

    const items = ['item1', 'item2', 'item3']

    return (
      <ul>
        {items.map((item,key) => {
            return (
              <div className='Menu'>
                <li key={key} onClick={this.setActive(key)} className={this.state.active === key ? 'active' : ''}>
                  <a href='#'>
                    {this.state.active === key ?
                      <span>&rang; </span> :
                      <span></span>
                    }
                    {item}
                  </a>
                </li>
              </div>
            )
          })
        }
      </ul>
    )
  }
}

export default Menu
