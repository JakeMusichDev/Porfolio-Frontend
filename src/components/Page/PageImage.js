import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'

export default class PageImage extends Component {
  render () {
    return (
      <div className={css(styles.imageContainer)} >
        <div className={css(styles.image)} style={{backgroundImage: `url(${this.props.src})`}}></div>
      </div>
    )
  }
}

const styles = StyleSheet.create({
  imageContainer: {
    height: '100%',
    width: '100%',
    gridRow: '2/7',
    gridColumn: '3/7',
  },
  image: {
    // height: "600px",
    // maxHeight: '600px',
    // width: 'auto',
    // border: '1px solid pink',
    height: '100%',
    width: '100%',
    backgroundPosition: 'left',
    backgroundSize: 'cover',
    
    // maxWidth: '800px'
  }
})


