import React from 'react'
import xSVG from '../../assets/x.svg'
import { StyleSheet, css } from 'aphrodite';
import {flex} from '../../styles/styleUtils'
import Zoom from 'react-reveal'

const PageDetailExit = (props) => {
  return (
    <div onClick={props.closePage} className={css(styles.exitContainer)}>
      <div className={css(styles.exitWrapper, flex.flexCenter)}>
        <img src={`${xSVG}`} className={css(styles.exitImage)} alt=""/>
      </div>
    </div>
  )
}

const styles = StyleSheet.create({
  exitContainer: {
    position: 'fixed',
    height: '10vh',
    bottom: "0",
    width: '100vw',
    display: 'grid',
    gridTemplateRows: 'repeat(1, 1fr)',
    gridTemplateColumns: 'repeat(10, 10%)',
    overflow: 'hidden',
    // border: '1px solid pink',
    zIndex: 200
  },
  exitWrapper: {
    height:'100%',
    gridColumn: '10',
    // border: '1px solid red'
  },
  exitImage: {
    // margin: '0 auto',
    transition:'0.3s all',
    opacity: '0.7',
    ':hover': {
      opacity: '1',
      transform: 'scale(1.1)'
    }
  }
})

export default PageDetailExit