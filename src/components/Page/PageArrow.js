import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import { flex } from '../../styles/styleUtils'
import {attachTilt, destroyTilt} from '../../utils/tiltHelper'
import { breakPoints } from '../../utils/styles'
import downArrow from '../../assets/general/down-arrow.svg'
import upArrow from '../../assets/general/up-arrow.svg'

export default class PageArrow extends Component {
  componentDidMount() {
    if(window.innerWidth > 700) {
      this.tiltObj = attachTilt(`page-arrow-${this.props.direction}`)
    }
  }

  componentWillUnmount() {
    if(this.tiltObj) destroyTilt(this.tiltObj)
  }

  render() {
    let direction =  this.props.direction === '+'
    let dirStyle =  direction ? styles.up : styles.down
    let dirImage = direction ? upArrow : downArrow
    return (
      <div id={`page-arrow-${this.props.direction}`} onClick={e => this.props.handleClick(this.props.direction)} className={css(styles.arrowContainer, flex.flexCenter, dirStyle)} >
        <img src={`${dirImage}`} className={css(styles.arrow)} alt=""/>
      </div>
    )
  }
}


const styles = StyleSheet.create({
  arrowContainer: {
    height: '100%',
    width: '100%',
    color: 'white',
  },
  arrow: {
    height: '35px',
    cursor: 'pointer',
    width: '35px',
    transition: '0.4s scale 0.4s height 0.4s width',
    ":active": {
      transform: 'scale(1.1)'
    },
    [breakPoints.tablet]: {
      height: '30px',
      width: '30px',
    },
    [breakPoints.mobile]: {
      height: '25px',
      width: '25px',
    }
  },
  up: {
    gridRow: '3/4',
    gridColumn: '1/2'
  },
  down: {
    gridRow: '5/6',
    gridColumn: '1/2'
  },
})


