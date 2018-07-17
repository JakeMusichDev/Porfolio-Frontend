import React, { Component } from 'react'
import Anime from 'animejs'
import { StyleSheet, css } from 'aphrodite/no-important'
import { breakPoints } from '../../utils/styles'

import LandingMenuSection from './LandingMenuSection'

import {items} from '../../data/home-route-data.js'

export default class LandingMenu extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    const { scrollState, open } = this.props
    return (
      <div className={css(styles.homeMenuContainer)}>     
        {items.map(
          (item, index) =>
            scrollState.currentItem === index && (
              <LandingMenuSection
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
    height: '100%',
    width: '100%',
    color: 'white',
    // border: '1px solid pink',
    gridRow: '2/5',
    gridColumn: '4/9'
  },
})
