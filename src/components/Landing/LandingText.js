import React, { Component } from 'react'
import {StyleSheet, css } from 'aphrodite/no-important'
import {flex} from '../../styles/styleUtils'
import Anime from 'animejs'

export class LandingText extends Component {
  componentDidMount() {
    Anime.timeline().add({
      targets: this.imgDiv,
      translateY: ['110%'],
      duration: 0,
    }).add({
      targets: this.imgDiv,
      translateY: ['0%'],
      duration: 1000,
      opacity: [0,1],
      delay: 3000,
      easing: 'easeInQuad',
    })
  }


  render() {
    return (
      <div className={css(this.props.mainStyle, styles.textBase, flex.flexCenter)}>
        <div className={css(styles.textWrapper)}>
          <div ref={div => this.imgDiv = div}>{this.props.text}</div>
        </div>
      </div>
    )
  }
}

const styles = StyleSheet.create({
  textBase: {
    height: '100%',
    width: '100%',
    color: '#F2F2F2',
  },
  textWrapper: {
    overflow: 'hidden'
  }
})

export default LandingText
