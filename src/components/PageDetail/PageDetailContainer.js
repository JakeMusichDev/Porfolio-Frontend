import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import PageDetailGrid from './PageDetailGrid'
import PageDetailHeader from './PageDetailHeader'
import PageDetailExit from './PageDetailExit'

import Anime from 'animejs'

export default class PageDetailContainer extends Component {
  componentDidMount() {
    Anime.timeline().add({
      targets: this.container,
      // translateY: '100%',
      duration: 0,
      opacity: 0
    }).add({
      targets: this.container,
      translateY: '0%',
      duration: 1000,
      delay: 500,
      opacity: 1,
      easing: 'easeInSine'
    })
  }

  render () {
    const {currentData, closePage } = this.props
    console.log(currentData.content);
    
    return (
      <div ref={refDiv => { this.container = refDiv }} className={css(styles.pageDetailContainer)} >
        <PageDetailHeader name={currentData.projectName} />
        <PageDetailExit closePage={closePage} />
        <PageDetailGrid gridData={currentData.content} />
        {currentData.role ? currentData.role : null}
        {currentData.description ? currentData.description : null}
      </div>
    )
  }
}

const styles = StyleSheet.create({
  pageDetailContainer: {
    height: '100vh',
    width: '100vw',
    color: 'white',
    background: 'rgba(15,15,15,0.8)',
    overflowY: 'scroll'
    // gridRow: '5/6',
    // gridColumn: '1/2',
  },
})


