import React, { Component, ImageBackground } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import Anime from 'animejs'
import "./../../styles/index.css"
import line from '../../assets/home/Line.svg'

export default class ScrollIndictator extends Component {
  componentDidMount() {
    Anime({
      targets: this.indicator,
      translateY: ['-200%', "0%"],
      duration: 5000,
      loop: true,
      easing: 'easeInOutQuad'
    })
  }

  render() {
    const {gridPos} = this.props
    return (
      <div className={css(styles.scrollIndicatorContainer, gridPos)}>
        <div className={css(styles.text)}>
          {"SCROLL"}      
        </div>
        <div className={css(styles.wrapper)}>
          <img className={css(styles.indicator)} ref={refDiv => {this.indicator = refDiv}} src={`${line}`} alt=""/>
        </div>
      </div>
    )
  }
  
}

const styles = StyleSheet.create({
  scrollIndicatorContainer: {
    height: '100%',
    width: '100%',
    // border: '1px solid pink',
  },
  wrapper: {
    width: '100%',
    overflow: 'hidden',
    height: '100%',
    // border: '1px solid pink',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center'
  },
  text: {
    width: '100%',
    textAlign: 'center',
    fontSize: 10,
  },
  indicator: {
    height: '10',
    width: '10'
  }
})