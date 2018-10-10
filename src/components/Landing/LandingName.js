import React, { Component } from 'react'
import Anime from 'animejs'
import { StyleSheet, css } from 'aphrodite/no-important'
import { breakPoints } from '../../utils/styles'

import LandingMenuSection from './LandingMenuSection'

import {items} from '../../data/routeData.js'
import name from '../../assets/home/name_straight.svg'

export default class LandingName extends Component {
  componentWillMount() {
    this.src = this.preloadImage(name)
  }

  preloadImage = (url) => {
    this.img = new Image();
    this.img.src = url;
  }

  componentDidMount() {
    Anime.timeline().add({
      targets: [this.imgDiv.children],
      translateY: ['20%', '0%'],
      opacity: [0, 1],
      delay: 500,
      duration: 1000,
      easing: 'easeInQuad'
    }).add({
      targets: [this.imgDiv.children],
      // translateY: ['-100%'],
      opacity: [1, 0],
      duration: 1200,
      delay: 400,
      // elasticity: 900,
      easing: 'linear'
    })
  }

  render() {
    const { scrollState, open } = this.props
    return (
      <div ref={div => this.imgDiv = div} className={css(styles.homeMenuContainer)}>
        <img src={this.img.src} className={css(styles.image)} alt=""/>
      </div>
    )
  }
}

const styles = StyleSheet.create({
  homeMenuContainer: {
    height: '100%',
    width: '100%',
    color: 'white',
    gridRow: '3/4',
    zIndex: 2,
    gridColumn: '2/10',
    [breakPoints.mobile]: {
      gridColumn: '2/10',
    }
  },
  imgContainer: {
    border: '1px solid white',
    width: '100%',
    overflow: 'hidden',
    fontSize: '40px',
    textAlign: 'center',
    fontFamily: 'karla'
  },
  image: {
    height: '100%',
    width: '100%',
    opacity: 0.7,
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
  }
})
