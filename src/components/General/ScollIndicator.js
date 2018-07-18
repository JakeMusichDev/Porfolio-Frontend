import React, { Component, ImageBackground } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import Anime from 'animejs'
import "./../../styles/index.css"
import line from '../../assets/home/Line.svg'

export default class ScrollIndictator extends Component {
  componentDidMount() {
    Anime({
      targets: this.indicator,
      translateY: '100%',
      duration: 3000,
      loop: true,
      easing: 'easeInQuad'
    })
  }

  render() {
    const {gridPos} = this.props
    return (
      <div className={css(styles.scrollIndicatorContainer, gridPos)}>
        <div className={css(styles.wrapper)}>
          <img className={css(styles.indicator)} ref={refDiv => {this.indicator = refDiv}} src={`${line}`} alt=""/>
        </div>
      </div>
    )
  }
  
}

const styles = StyleSheet.create({
  scrollIndicatorContainer: {
    height: '10vh',
    width: '10vw',
  },
  wrapper: {
    height: 'auto',
    width: '100%',
    overflow: 'hidden',
    border: '1px solid pink'
  }
})