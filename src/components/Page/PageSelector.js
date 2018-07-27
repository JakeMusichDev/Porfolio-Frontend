import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import {breakPoints} from '../../utils/styles'

export const PageSelector = (props) => {
  return (
    <div onClick={props.handleOpenProject} className={css(styles.titleContainer)} >
      - view {props.text}
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
    marginTop: 10,
    textAlign: 'right',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    transition: '1s font-size',
    ":hover": {
      fontSize: 11
    },
    [breakPoints.tablet]: {
      gridColumn: '9/10',
    },
    [breakPoints.mobile]: {
      gridColumn: '8/10',
    }
  },
})


