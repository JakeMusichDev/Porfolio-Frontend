import React, { Component } from 'react'
import {StyleSheet, css } from 'aphrodite/no-important'
import {flex} from '../../styles/styleUtils'
import Slide from 'react-reveal'

const LandingText = (props) => {
  return (
    <div className={css(props.mainStyle, styles.textBase, flex.flexCenter)}>
      <Slide top cascade>
        {props.text}
      </Slide>
    </div>
  )
}

const styles = StyleSheet.create({
  textBase: {
    height: '100%',
    width: '100%',
    color: '#F2F2F2',
  }
})

export default LandingText
