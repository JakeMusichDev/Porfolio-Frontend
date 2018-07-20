import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import '../styles/index.css'
import Anime from 'animejs'

import MenuDirectory from '../components/Menu/MenuDirectory'


export default class MenuContainer extends Component {
  componentDidMount() {
    Anime.timeline().add({
      targets: '#appMenu--mainContainer',
      duration: 0,
      opacity: 0,
      // scale: 0,
      // translateY: '-100%'
    }).add({
      targets: '#appMenu--mainContainer',
      duration: 500,
      opacity: 1,
      easing: 'easeInQuad',
      // scale: 1,
      // translateY: '0%'
    })
  }

  render() {
    
    return (
      <div id='appMenu--mainContainer' className={css(styles.menuMainContainer)}>
        <MenuDirectory closeMenu={this.props.closeMenu}/>
      </div>
    )
  }
}

const styles = StyleSheet.create({
  menuMainContainer: {
    height: '100vh',
    width: '100vw',
    position: 'absolute',
    background: "rgba(256,256, 259, 0.7)",
    top: 0,
    right: 0,
    zIndex: 100,
  },
})
