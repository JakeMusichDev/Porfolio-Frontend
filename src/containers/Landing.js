import React, { Component, ImageBackground } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import Anime from 'animejs'
import _ from 'underscore'
import {withScrollMonitor} from '../hoc/ScrollHOC'
import LandingContainer from '../components/Landing/LandingContainer'


class Landing extends Component {
  render() {
    const { data } = this.props
    return (
      <div className={css(styles.homeGridContainer)}>
        <LandingContainer scrollState={data} />
      </div>
    )
  }

}

const styles = StyleSheet.create({
  homeGridContainer: {
    height: '100vh',
    width: '100vw',
  },
})

const LandingWithScroll = withScrollMonitor(Landing, ['i','p','t','t'])
export default LandingWithScroll