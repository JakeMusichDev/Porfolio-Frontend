import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'

export const PageTitle = (props) => {
  return (
    <div className={css(styles.titleContainer)} >
      {props.title}
    </div>
  )
}

const styles = StyleSheet.create({
  titleContainer: {
    height: '100%',
    width: '100%',
    color: 'white',
    gridRow: '5/6',
    gridColumn: '1/2',
  },
})


