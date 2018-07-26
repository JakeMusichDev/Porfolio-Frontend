import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite/no-important'
import Anime from 'animejs'
import _ from 'underscore'
import {withScrollMonitor} from '../../utils/hoc/ScrollHOC'

import ScrollIndicator from '../General/ScollIndicator'
import PageMenu from './PageMenu'
import {PageTitle} from './PageTitle'
import PageImage from './PageImage';
import { PageSelector } from './PageSelector';
import PageArrow from './PageArrow'
import PageDetailContainer from '../PageDetail/PageDetailContainer'
import PageDetailPaintingContainer from '../PageDetail/PageDetailPaintingContainer'
import { items } from '../../data/routeData';

export default class PageContainer extends Component {
  constructor (props) {
    super(props)
    
    this.state = { pageLoaded: false, focusActive: false }

    this.handleClickThrottled = _.throttle(this.handleClick, 700, {trailing: false})
  }

  componentDidMount() {
    this.animateIn()
  }
  
  render() {
    const { scrollIndex, pageTitle, handleClick, pageData } = this.props
    const currentProject = this.nextProject()
    const handleArrowThrottled = _.throttle(handleClick, 700, {trailing: false})
    const selectorText = currentProject.type !== 'painting' ? 'project' : 'painting'
    return(
      <div ref={refDiv => {this.container = refDiv}}  className={css(styles.pageContainerMain)} >
        {pageData.map((item, index) => index === scrollIndex.currentItem ? <PageImage src={currentProject.mainImage} /> : null )}
        <PageMenu  index={scrollIndex} name={currentProject.projectName} length={this.props.pageData.length} handleOpenProject={this.handleClickThrottled} />
        <PageArrow handleClick={handleArrowThrottled} direction={'+'}/>
        <PageArrow handleClick={handleArrowThrottled} direction={'-'} />
        <PageTitle title={pageTitle} />
        <PageSelector text={selectorText} handleOpenProject={this.handleClickThrottled} />
        <ScrollIndicator gridPos={styles.gridPos} />
        { this.renderDetail(this.state.focusActive, currentProject.type, currentProject) }
      </div>
    )
  }


  nextProject = () => {
    return this.props.pageData[this.props.scrollIndex.currentItem]
  }


  renderDetail = (focusActive, type, currentProject) => {
    if(focusActive) {
      if(type !== 'painting') {
        return <PageDetailContainer currentData={currentProject} closePage={this.handleClickThrottled} /> 
      } else {
        return <PageDetailPaintingContainer currentData={currentProject} closePage={this.handleClickThrottled} /> 
      }
    } else return null
  }


  handleClick = () => {
    const {focusActive, pageLoaded} = this.state
    if (!pageLoaded) return
    if(focusActive) {
      this.detailTransitionAnimation(1, 1)
      this.setState({focusActive: !focusActive})
      this.props.addListeners()
    } else {
      this.detailTransitionAnimation(0.7, 0.1)
      this.props.removeListeners()
    }
  }

  detailTransitionAnimation = (scale, opacity) => {
    const {focusActive} = this.state
    const _this = this;
    Anime({
      targets: this.container.childNodes,
      scale: scale,
      duration: 700,
      opacity: opacity,
      easing: 'easeInOutQuad',
      complete: () => !focusActive ? this.setState({focusActive: !focusActive}) : null
    })
  }

  animateIn = () => {
    Anime.timeline().add({
      targets: [this.container.childNodes],
      translateY: '100%',
      duration: 0,
      opacity: 0
    }).add({
      targets: this.container.childNodes,
      translateY: '0%',
      duration: 1000,
      opacity: 1,
      easing: 'easeInOutQuad',
      delay: (e, i) => i * 120,
      complete: () => this.setState({pageLoaded:true})
    })
  }
}

const styles = StyleSheet.create({
  pageContainerMain: {
    height: '100vh',
    width: '100vw',
    display: 'grid',
    background: 'rgb(15,15,15)',
    gridTemplateColumns: 'repeat(10, 10%)',
    gridTemplateRows: 'repeat(6, 15%)',
    color: 'white',
  },
  gridPos: {
    gridRow: '7/10',
    gridColumn: '10/11'
  }
})
