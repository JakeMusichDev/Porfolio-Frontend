import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import PageDetailGrid from './PageDetailGrid'
import PageDetailHeader from './PageDetailHeader'
import PageDetailExit from './PageDetailExit'
import PageDetailSection from './PageDetailSection'
import Anime from 'animejs'

export default class PageDetailContainer extends Component {
  componentDidMount() {
    Anime.timeline().add({
      targets: this.container.children,
      // translateX: '100%',
      duration: 0,
      opacity: 0
    }).add({
      targets: this.container.children,
      // translateX: '0%',
      duration: 900,
      delay: (e, i) => (i * 100) + 100,
      opacity: 1,
      easing: 'easeInQuad'
    })
  }

  render () {
    const {currentData, closePage } = this.props
    let type = currentData.type;
    let content = currentData.content 
    let description = currentData.description
    return (
      <div >
        <PageDetailExit closePage={closePage} />
        <div id='main-rellax' ref={refDiv => { this.container = refDiv }} className={css(styles.pageDetailContainer)} >
          <PageDetailHeader name={currentData.projectName} description={description} role={currentData.role}/>
          <PageDetailGrid gridData={content} />
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
    background: 'rgba(15,15,15,0.4)',
    overflowY: 'scroll',
    '-webkit-overflow-scrolling': 'touch'
  },
})


