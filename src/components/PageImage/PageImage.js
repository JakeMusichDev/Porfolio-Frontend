import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'

export default class PageImage extends Component {
  render () {
    return (
      <div className={css(styles.imageContainer)} >
        <img src={this.props.src} className={css(styles.image)} alt=""/>
      </div>
    )
  }
}

const styles = StyleSheet.create({
  imageContainer: {
    height: '100%',
    width: '100%',
    border: '1px solid red',
    gridRow: '2/4',
    gridColumn: '2/5',
  },
  image: {
    height: '100%',
    width: 'auto',
  },
})


