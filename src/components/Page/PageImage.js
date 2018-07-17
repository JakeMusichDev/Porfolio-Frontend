import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import PixiContainer from '../Pixi/PixiContainer'

export default class PageImage extends Component {
  render () {
    return (
      <div className={css(styles.imageContainer)} >
        {/* <PixiContainer image={this.props.src} /> */}
        <img src={this.props.src} className={css(styles.image)} alt=""/>
      </div>
    )
  }
}

const styles = StyleSheet.create({
  imageContainer: {
    height: '100%',
    width: '100%',
    gridRow: '2/7',
    gridColumn: '3/4',
  },
  image: {
    height: "auto",
    maxHeight: '400px',
    // width: 'auto',
    maxWidth: '800px'
  }
})


