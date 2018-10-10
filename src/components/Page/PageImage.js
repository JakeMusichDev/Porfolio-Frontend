import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import Anime from 'animejs'
import VanillaTilt from 'vanilla-tilt'
import {breakPoints} from '../../utils/styles'

export default class PageImage extends Component {
  preloadImage = (url) => {
    this.img = new Image();
    this.img.src = url;
  }

  componentWillMount() {
    this.src = this.preloadImage(this.props.src)
  }

  componentDidMount() {
    Anime({
      targets: '#page-image',
      duration: 900,
      opacity: [0, 0.7],
      easing: 'linear'
    })
  }

  render () {
    return (
      <div className={css(styles.imageContainer)} >
        <div id='page-image' className={css(styles.image)} style={{backgroundImage: `url(${this.img.src})`}}></div>
      </div>
    )
  }


  attachTilt = () => {
    if( this.checkSize() ) {
      const tiltArray = [];
      const elements = document.getElementsByName('menu--section')
      for (var i = 0; i < elements.length; i++) {
        var elementToDestroy = elements[i];
        tiltArray.push(elementToDestroy)
        VanillaTilt.init(elements[i], {
          reverse: false,
          max: 40,
          perspective: 500,
          scale: 1,
          speed: 1000,
          transition: true,
          axis: null,
          reset: true,
          easing: "cubic-bezier(.03,.08,.52,.99)",
        });
      }
      this.setState({tiltArray})
    }
  }

  destroyTilt = () => {
    const {tiltArray} = this.state;
    if ( this.checkSize() && !this.isSafari() ) {
      for (var i = 0; i < tiltArray.length; i++) {
        if(tiltArray[i].vanillaTilt) {
          tiltArray[i].vanillaTilt.destroy();
        }
      }
    }
  }

  checkSize = () => {
    return window.innerWidth > 600;
  };
  
}

const styles = StyleSheet.create({
  imageContainer: {
    height: '100%',
    width: '100%',
    gridRow: '2/7',
    gridColumn: '3/8',
    // border: '1px  solid white',
    [breakPoints.mobile]: {
      gridColumn: '2/10',
      gridRow: '3/6',
    },
  },
  image: {
    height: '100%',
    width: '100%',
    backgroundPosition: 'center center',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    opacity: '0.7'
  }
})


