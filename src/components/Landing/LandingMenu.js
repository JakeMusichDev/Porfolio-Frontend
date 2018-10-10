import React, { Component } from 'react'
import Anime from 'animejs'
import { StyleSheet, css } from 'aphrodite/no-important'
import { breakPoints } from '../../utils/styles'

import LandingMenuSection from './LandingMenuSection'

import { items } from '../../data/routeData.js'

export default class LandingMenu extends Component {
  componentDidMount() {
    Anime({
      targets: this.container.children,
      translateX: ['5%', '0%'],
      duration: 800,
      opacity: [0, 1],
      easing: 'easeInQuad',
      delay: (e, i) => (i * 150) + 3000,
    })
  }

  render() {
    const { scrollState, open } = this.props
    return (
      <div ref={ref => this.container = ref} className={css(styles.homeMenuContainer)}>
        {items.map( 
          (item, index) =>
            ( <LandingMenuSection
                key={`menu-section-${index}`}
                item={item}
                index={index}
                active={scrollState.currentItem}
                direction={scrollState.direction}
                open={open}
              />
            )
        )}
      </div>
    )
  }
}

const styles = StyleSheet.create({
  homeMenuContainer: {
    width: '100%',
    color: 'white',
    gridRow: '2',
    zIndex: 3,
    gridColumn: '7/9',
    gridRow: '3/4',
    [breakPoints.mobile]: {
      gridColumn: '4/9',
      gridRow: '3/4',
    }
  }
})
