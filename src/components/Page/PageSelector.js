import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'

export const PageSelector = (props) => {
  return (
    <div className={css(styles.titleContainer)} >
      - view project
    </div>
  )
}

const styles = StyleSheet.create({
  titleContainer: {
    height: '100%',
    width: '100%',
    color: 'white',
    gridRow: '6/7',
    gridColumn: '9/10',
    fontSize: 10,
    textAlign: 'right'
  },
})


