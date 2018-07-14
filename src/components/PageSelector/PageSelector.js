import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'

export const PageSelector = (props) => {
  return (
    <div className={css(styles.titleContainer)} >
      P
    </div>
  )
}

const styles = StyleSheet.create({
  titleContainer: {
    height: '100%',
    width: '100%',
    color: 'white',
    gridRow: '3/4',
    gridColumn: '3/4',
  },
})


