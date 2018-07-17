import React, { Component } from 'react'
import PixiContainer from '../Pixi/PixiContainer'
import { StyleSheet, css } from '../../../node_modules/aphrodite';

export default class LandingImage extends Component {
  render () {
    return (
      <div className={css(styles.imageContainer)} >
        <PixiContainer image={this.props.src} />
      </div>
    )
  }
}

const styles = StyleSheet.create({
  imageContainer: {
    height: '100%',
    width: '100%',
    color: 'white',
    border: '1px solid green',
    gridRow: '2/5',
    gridColumn: '2/8',
    overflow: 'hidden'
  },
})