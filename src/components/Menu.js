import React, { Component } from 'react'

class Menu extends Component {

  state = {active : null}

  setActive = (item) => () => this.setState({active : item})

  render() {

    const items = ['item1', 'item2', 'item3']

    return (
      <ul style={{margin: '0', padding: '0', listStyleType: 'none', backgroundColor: '#f1f1f1'}}>
        {items.map((item,key) => {
            return (
              <li key={key} onClick={this.setActive(key)} style=
                {this.state.active === key ? {backgroundColor:'#5B70F3'} : {backgroundColor:'#4850B9'}}>
                <a href='#' style={{display:'block', color: '#fff', padding: '8px 16px', textDecoration: 'none', fontWeight: 'bold'}}>
                {this.state.active === key ?
                  <span>&rang; </span> :
                  <span></span>
                }
                {item}
                </a>
              </li>
            )
          })
        }
      </ul>
    )
  }
}

export default Menu
