import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import {breakPoints} from '../../utils/styles'
import PageDetailPainting from './PageDetailPainting'
import PageDetailHeader from './PageDetailHeader'
import PageDetailExit from './PageDetailExit'
import PageDetailSection from './PageDetailSection'
import Anime from 'animejs'

export default class PageDetailPaintingContainer extends Component {
  componentDidMount() {
    Anime.timeline().add({
      targets: this.container,
      // translateY: '100%',
      duration: 0,
      opacity: 0
    }).add({
      targets: this.container,
      // translateY: '0%',
      duration: 1000,
      delay: 200,
      opacity: 1,
      easing: 'linear'
    })
  }

  render () {
    const {currentData, closePage } = this.props
    let type = currentData.type;
    let content = currentData.content 
    return (
      <div >
        <PageDetailExit closePage={closePage} />
        <div ref={refDiv => { this.container = refDiv }} className={css(styles.pageDetailContainer)} >
          <PageDetailPainting gridData={content} />
          <div className={css(styles.description)}>
            <p>{currentData.description}</p>
            <p>{currentData.year}</p>
          </div>
        </div>
      </div>
    )
  }
}

const styles = StyleSheet.create({
  pageDetailContainer: {
    height: '100vh',
    width: '100vw',
    color: 'white',
    display: 'grid',
    gridTemplateColumns: 'repeat(10, 10%)',
    gridTemplateRows: 'repeat(6, 20%)',
    background: 'rgba(15,15,15,0.8)',
    overflowY: 'hidden',
  },
  description: {
    gridRow: '5/6',
    gridColumn: '8/10',
    fontSize: 12,
    [breakPoints.tablet]: {
      gridColumn: '8/11',
      gridRow: '5/6',
    },
    [breakPoints.mobile]: {
      gridColumn: '2/11',
      gridRow: '5/6',
    }
  }
})


