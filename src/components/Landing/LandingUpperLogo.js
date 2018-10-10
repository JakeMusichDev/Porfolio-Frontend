import React, { Component } from 'react'
import Anime from 'animejs'
import { StyleSheet, css } from 'aphrodite/no-important'
import { breakPoints } from '../../utils/styles'

import LandingMenuSection from './LandingMenuSection'

import {items} from '../../data/routeData.js'
import name from '../../assets/home/name_straight.svg'

export default class LandingUpperLogo extends Component {
  componentDidMount() {
    Anime.timeline().add({
      targets: this.imgDiv,
      translateY: ['110%'],
      duration: 0,
    }).add({
      targets: this.imgDiv,
      translateY: ['0%'],
      duration: 1000,
      opacity: [0,0.8],
      delay: 2400,
      easing: 'easeInQuad',
    })
  }

  render() {
    return (
      <div className={css(styles.landingLogo)}>
        <div className={css(styles.landingLogoWrapper)}>
          <div ref={div => this.imgDiv = div}>Jake Musich</div>
        </div>
      </div>
    )
  }
}

const styles = StyleSheet.create({
  landingLogo: {
    height: '100%',
    width: '100%',
    gridRow: '1/2',
    gridColumn: '1/3',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 16,
    color: 'white',
    fontFamily: 'Vollkorn',
    [breakPoints.mobile]: {
      gridColumn: '1/5',
    }
  },
  landingLogoWrapper: {
    overflow: 'hidden',
  },
})
