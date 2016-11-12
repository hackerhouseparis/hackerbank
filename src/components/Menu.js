import React, { Component } from 'react'

class Menu extends Component {

  state = {active : null}

  setActive = (item) => () => this.setState({active : item})

  render() {

    const items = ['item1', 'item2', 'item3']

    return (
      <ul>
        {items.map((item,key) => {
            return <li key={key} onClick={this.setActive(key)} style={{color: this.state.active === key ? 'red' : 'black'}}>{item}</li>
          })
        }
      </ul>
    )
  }
}

export default Menu
