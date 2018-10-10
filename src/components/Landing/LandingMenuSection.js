import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Anime from 'animejs'
import { StyleSheet, css } from 'aphrodite/no-important'
import { breakPoints } from '../../utils/styles'

export default class LandingMenuSection extends Component {
  render() {
    const { item, index, open } = this.props
    return (
      <div name='menu--section' className={css(styles.sectionWrapper)} >
        <div id={`menu-section-${index}`} className={css(styles.sectionContainer)}>
          <div onClick={e => open(e, item)} className={css(styles.section)}>{ item.name.toUpperCase() }</div>
        </div>
      </div>
    )
  }
}


const styles = StyleSheet.create({
  sectionWrapper: {
    height: '25%',
    width: '100%',
  },
  sectionContainer: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  section: {
    fontFamily: ['Vollkorn', 'sans-serif'],
    textDecoration: 'none',
    color: '#fff',
    fontSize: '1.5em',
    textAlign: 'right',
    letterSpacing: '2px',
    opacity:'1',
    // textTransform: 'capitalize',
    cursor: 'pointer',
    transition: '0.6s all',
    [breakPoints.mobile]: {
      fontSize: '2em',
    },
    ":hover" : {
      opacity:0.8,
      color: '#B94F4F',
      transform: 'translateX(2px)'
    }
  }
})
