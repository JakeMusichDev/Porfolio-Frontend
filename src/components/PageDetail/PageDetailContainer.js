import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'

export default class PageDetailContainer extends Component {
  render () {
    return (
      <div className={css(styles.pageDetailContainer)} >
        detail
      </div>
    )
  }
}

const styles = StyleSheet.create({
  pageDetailContainer: {
    height: '100h',
    width: '100vw',
    color: 'white',
    // gridRow: '5/6',
    // gridColumn: '1/2',
  },
})


