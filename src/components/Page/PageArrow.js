import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import { flex } from '../../styles/styleUtils'
import downArrow from '../../assets/photography/down-arrow.svg'
import upArrow from '../../assets/photography/up-arrow.svg'
import {attachTilt, destroyTilt} from '../../utils/tiltHelper'

export default class PageArrow extends Component {
  componentDidMount() {
    this.tiltObj = attachTilt(`page-arrow-${this.props.direction}`)
  }

  componentWillUnmount() {
    destroyTilt(this.tiltObj)
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
    width: '35px',
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


