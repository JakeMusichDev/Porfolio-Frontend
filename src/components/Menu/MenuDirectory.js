import React, { Component, PropTypes } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import {flex} from '../../styles/styleUtils'
import { Link } from 'react-router-dom'
import Anime from 'animejs'
import {items} from '../../data/home-route-data.js'

export default class MenuDirectory extends Component {
  render() {
    return (
      <div ref={el => (this.container = el)} className={css(styles.menuDirectoryContainer)}>
        {items.map( (item, index) => (
          <div onClick={this.props.closeMenu} className={css(styles.menuItemWrapper)}>
            <Link to={`${item.route}`} style={{textDecoration: 'none'}}>
              <img src={`${item.menuSvg}`} className={css(styles.menuItem)} alt=""/>
            </Link>
          </div>
        ))}
      </div>
    )
  }
}

const styles = StyleSheet.create({
  menuDirectoryContainer: {
    height: '80%',
    width: '80%',
    cursor: 'pointer',
    zIndex: 10,
  },
  menuItemWrapper: {
    marginLeft: '20%',
    marginTop: '2%',
  },
  menuItem: {
    textDecoration: 'none',
    color: 'black',
    height: '15vh',
    opacity: 0.5,
    transition: '0.3s all',
    ":hover": {
      tranform: 'scale(1.1)',
      opacity: 1
    }
  }
})
