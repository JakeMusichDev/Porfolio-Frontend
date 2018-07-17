import React from 'react'
import xSVG from '../../assets/x.svg'
import { StyleSheet, css } from 'aphrodite';

const PageDetailExit = (props) => {
  return (
    <div onClick={props.close} className={css(styles.exitContainer)}>
      <img src={`${xSVG}`} alt=""/>
    </div>
  )
}

const styles = StyleSheet.create({
  exitContainer: {

  }
})

export default PageDetailExit