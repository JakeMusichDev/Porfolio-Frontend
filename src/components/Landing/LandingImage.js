import React, { Component } from 'react'
import PixiContainer from '../Pixi/PixiContainer'
import Anime from 'animejs'
import { StyleSheet, css } from '../../../node_modules/aphrodite';
import name from '../../assets/photography/out/snow-railroad.JPG'
import selfie from '../../assets/photography/couchGaze/camera-self.jpg'
import skyline from '../../assets/home/bk-skyline.jpg'

export default class LandingImage extends Component {
  preloadImage = (url) => {
    this.img = new Image();
    this.img.src = url;
  }

  componentWillMount() {
    this.src = this.preloadImage(skyline)
  }
  
  componentDidMount() {
    Anime({
      targets: this.imgDiv,
      duration: 2500,
      opacity: [0, 1],
      delay: 1800,
      easing: 'linear'
    })
  }

  render () {
    return (
      <div className={css(styles.imageContainer)} >
        <div className={css(styles.imageWrapper)}>
          <div className={css(styles.image)} ref={div => this.imgDiv = div}>
            <PixiContainer image={this.img.src} />
          </div>
        </div>
      </div>
    )
  }
}

const styles = StyleSheet.create({
  imageContainer: {
    height: '100%',
    width: '100%',
    color: 'white',
    gridRow: '2/5',
    gridColumn: '2/10',
    overflow: 'hidden',
    zIndex: 1
  },
  imageWrapper: {
    overflow: 'hidden',
    height: '100%',
    width: '100%',
    background: 'none',
    position: 'relative',
    // border: '1px solid red'
  },
  imageWipe: {
    // overflow: 'hidden',
    height: '100%',
    width: '100%',
    border: '1px solid red',
    background: 'blue',
    // position: 'absolute'
  },
  image: {
    height: '100%',
    width: '100%',
    position: 'relative',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
  }
})