import React, { Component, ImageBackground } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import { flex } from '../../styles/styleUtils'
import Anime from 'animejs'
import "./../../styles/index.css"
import line from '../../assets/general/scroll.svg'

export default class ScrollIndictator extends Component {
  componentDidMount() {
    // Anime({
    //   targets: this.indicator,
    //   scale: [1, 1.1],
    //   duration: 1000,
    //   loop: true,
    //   easing: 'easeInOutExpo'
    // })
  }

  render() {
    const {gridPos} = this.props
    return (
      <div className={css(styles.scrollIndicatorContainer, gridPos, flex.flexCenter)}>
        {/* <div className={css(styles.text)} ref={refDiv => {this.indicator = refDiv}}>
          {"SCROLL"}
        </div> */}
        <img className={css(styles.text)} src={`${line}`} alt=""/>
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
  text: {
    
    height: '30px',
    width: '40px',
    textAlign: 'center',
    fontSize: 10,
    letterSpacing: '1.5%'
  }
})