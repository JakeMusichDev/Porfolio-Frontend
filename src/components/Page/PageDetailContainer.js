import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import Anime from 'animejs'

export default class PageDetailContainer extends Component {
  componentDidMount() {
    Anime.timeline().add({
      targets: this.container,
      translateY: '100%',
      duration: 0
    }).add({
      targets: this.container,
      translateY: '0%',
      duration: 1000,
      easing: 'easeInOutSine'
    })
  }

  render () {
    const {currentData} = this.props
    console.log(currentData.content);
    
    return (
      <div ref={refDiv => {this.container = refDiv}} className={css(styles.pageDetailContainer)} >
        { currentData.projectName }
      </div>
    )
  }
}

const styles = StyleSheet.create({
  pageDetailContainer: {
    height: '100vh',
    width: '100vw',
    color: 'white',
    background: 'lightblue'
    // gridRow: '5/6',
    // gridColumn: '1/2',
  },
})


