import React from 'react'
import xSVG from '../../assets/x.svg'
import { StyleSheet, css } from 'aphrodite';
import Zoom from 'react-reveal'

const PageDetailExit = (props) => {
  return (
    <div onClick={props.closePage} className={css(styles.exitContainer)}>
      <img src={`${xSVG}`} alt=""/>
    </div>
  )
}

const styles = StyleSheet.create({
  exitContainer: {
    position: 'fixed',
    bottom: "10vh",
    right: "2vw",
    overflow: 'hidden',
    // border: '1px solid pink',
    zIndex: 200
  }
})

export default PageDetailExit