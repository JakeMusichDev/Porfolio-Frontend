import React from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import { flex } from '../../styles/styleUtils'
import Fade from 'react-reveal'

const LandingCounter = (props) => {
  return (
    <Fade>
      <div className={css(styles.counter, flex.flexCenter)}>
        {props.index + 1 }. 4
      </div>
    </Fade>
    
  )
}

const styles = StyleSheet.create({
  counter: {
    gridRow: '5/6',
    gridColumn: '10/11',
    textAlign: 'center',
    fontSize: '14px'
  }
})

export default LandingCounter