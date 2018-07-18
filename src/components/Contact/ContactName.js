import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite/no-important'
import Anime from 'animejs'
import name_lg from '../../assets/name_lg.svg'

export default class ContactName extends Component {

  componentDidMount() {
    const tl = Anime.timeline()
    tl.add({
      targets: ['#c--img'],
      opacity: 0,
      easing: 'easeInOutSine',
      duration: 0,
      delay: function(el, i) { return i * 250 },
    }).add({
      targets: ['#c--img'],
      translateY: ['0%'],
      opacity: 0.7,
      duration: 1400,
      easing: 'linear',
    })
  }

  render() {
    return (
      <div className={css(styles.flickerImgContainer)}>
        <img id='c--img' className={css(styles.img)} src={`${name_lg}`} alt=""/>
      </div>
    )
  }
}

const styles = StyleSheet.create({
  flickerImgContainer: {
    height: '180%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
  },
  img: {
    height:"1000px",
    width:"auto"
  }
})
