import React, { Component, PropTypes } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import { Link } from 'react-router-dom'
import Anime from 'animejs'

import { flex } from '../../styles/styleUtils'
import {breakPoints} from '../../utils/styles'

import {items} from '../../data/routeData.js'

export default class MenuDirectory extends Component {
  componentDidMount() {    
    Anime({
      targets: this.container.children,
      translateY: '10%',
      duration: 1000,
      opacity: [0,0.8],
      easing: 'easeInOutQuad',
      delay: (e, i) => i * 100,
    })
  }
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
    // border: '1px solid white',
  },
  menuItemWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '25%',
    [breakPoints.tablet]: {
      marginLeft: '15%',
    },
    [breakPoints.mobile]: {
      marginLeft: '1%',
    },
  },
  menuItem: {
    textDecoration: 'none',
    color: 'black',
    width: '30vw',
    opacity: 0.9,
    transition: '0.3s opacity',
    [breakPoints.tablet]: {
      opacity: 1,
      width: '35vw',
  },
    [breakPoints.mobile]: {
      opacity: 1,
      width: '50vw',
    },
    ":hover": {
      tranform: 'scale(1.1)',
      opacity: 1
    }
  }
})
