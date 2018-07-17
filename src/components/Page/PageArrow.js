import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import { flex } from '../../styles/styleUtils'
import downArrow from '../../assets/photography/down-arrow.svg'
import upArrow from '../../assets/photography/up-arrow.svg'

export const PageArrow = (props) => {
  let direction =  props.direction === '+' 
  let dirStyle =  direction ? styles.up : styles.down
  let dirImage = direction ? upArrow : downArrow
  
  return (
    <div onClick={props.handleClick} className={css(styles.arrowContainer, flex.flexCenter, dirStyle)} >
      <img src={`${dirImage}`} className={css(styles.arrow)} alt=""/>
    </div>
  )
}

const styles = StyleSheet.create({
  arrowContainer: {
    height: '100%',
    width: '100%',
    color: 'white',
  },
  arrow: {
    height: '35px',
    width: '35px',
  },
  up: {
    gridRow: '3/4',
    gridColumn: '1/3'
  },
  down: {
    gridRow: '5/6',
    gridColumn: '1/3'
  },
})


