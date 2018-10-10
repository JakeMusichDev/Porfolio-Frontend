import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import Anime from 'animejs'
import '../../styles/index.css'
import {breakPoints} from '../../utils/styles'

export default class PageMenu extends Component {
  render() {
    const { name, index, handleOpenProject, length } = this.props
    return (
      <div ref={ref => {this.menu = ref}} className={css(styles.scrollInstructionContainer)}>
        <div className={css(styles.wrapper)}>
          <div className={css(styles.scrollInstruction)}>{index.currentItem + 1}. / {length}</div>
        </div>
        <div className={css(styles.wrapper)}>
          <div onClick={handleOpenProject} className={css(styles.menuProjectTitle)}>{name}</div>
        </div>
      </div>
    )
  }
}

const styles = StyleSheet.create({
  scrollInstructionContainer: {
    height: 'auto',
    width: '100%',
    display:'block',
    gridColumn: '7/11',
    gridRow: '5/6',
    alignSelf: 'end',
    fontFamily: ['Inconsolata', 'sans-serif'], 
    color: '#F2F2F2',
    fontSize: '0.5rem',
    transition: '0.5s grid-column',
    // border: '1px solid red',
    [breakPoints.mobile]: {
      gridColumn: '2/10',
      gridRow: '4/5',
    },
  },
  scrollInstruction: {
    fontFamily: ['karla', 'sans-serif'], 
    width: 'auto',
    fontSize: '1.5em',
    marginBottom: '20px',
    whiteSpace: 'nowrap',
    // border: '1px solid yellow',
  },
  menuProjectTitle: {
    // border: '1px solid green',
    fontSize: '3rem',
    fontFamily: ['Vollkorn', 'serif'],
    cursor: 'pointer',
    transition: '1s color',
    color: '#FFF',
    [breakPoints.tablet]: {
      fontSize: '2rem',
    },
    [breakPoints.mobile]: {
      fontSize: '2rem',
      textAlign: 'center'
    },
    ":hover": {
      opacity: 1,
      color: '#B94F4F',
    },
  },
  wrapper: {
    overflow: 'hidden',
  }
})
