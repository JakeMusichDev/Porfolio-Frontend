import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import Anime from 'animejs'

export default class PageImage extends Component {
  componentDidMount() {
    Anime({
      targets: '#page-image',
      duration: 700,
      opacity: [0, 0.7],
      easing: 'linear'
    })
  }
  render () {
    return (
      <div className={css(styles.imageContainer)} >
        <div id='page-image' className={css(styles.image)} style={{backgroundImage: `url(${this.props.src})`}}></div>
      </div>
    )
  }
}

const styles = StyleSheet.create({
  imageContainer: {
    height: '100%',
    width: '100%',
    gridRow: '2/7',
    gridColumn: '2/8',
  },
  image: {
    height: '100%',
    width: '100%',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    opacity: '0.7'
  }
})


