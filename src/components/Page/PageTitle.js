import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import { flex } from '../../styles/styleUtils'
import Zoom from 'react-reveal'

export const PageTitle = (props) => {
  return (
    <div className={css(styles.titleContainer, flex.flexCenter)} >
      <div className={css(styles.title)}>
        <Zoom bottom cascade>
          {props.title}
        </Zoom>
      </div>
    </div>
  )
}

const styles = StyleSheet.create({
  titleContainer: {
    height: '100%',
    width: '100%',
    color: 'white',
    // gridRow: '7/8',
    // gridColumn: '1/3',
    whiteSpace: 'nowrap',
    gridRow: '2/3',
    gridColumn: '9/10',
    fontFamily: ['Inconsolata', 'sans-serif'], 
    fontSize: 12,
    opacity: 0.5
  },
  title: {
    height: 'auto',
    width: 'auto',
  }
})