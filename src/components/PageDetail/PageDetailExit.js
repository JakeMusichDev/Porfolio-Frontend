import React from 'react'
import xSVG from '../../assets/general/x.svg'
import { StyleSheet, css } from 'aphrodite';
import { flex } from '../../styles/styleUtils'
import { breakPoints } from '../../utils/styles'

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
    zIndex: 200
  },
  exitWrapper: {
    height:'100%',
    gridColumn: '10',
  },
  exitImage: {
    height: 50,
    width: 50,
    opacity: '0.7',
    ':hover': {
      opacity: '1',
      transform: 'scale(1.1)'
    },
    [breakPoints.tablet]: {
      height: 40,
      width: 40,
    },
    [breakPoints.mobile]: {
      height: 30,
      width: 30,
    }
  }
})

export default PageDetailExit