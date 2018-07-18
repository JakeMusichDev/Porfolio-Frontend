import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite/no-important'
import Anime from 'animejs'
import {withScrollMonitor} from '../../hoc/ScrollHOC'

// import ProjectMainImage from '../ProjectMainImage/ProjectMainImage'
import PageMenu from './PageMenu'
import {PageTitle} from './PageTitle'
import PageImage from './PageImage';
import { PageSelector } from './PageSelector';
import PageArrow from './PageArrow'
import PageDetailContainer from '../PageDetail/PageDetailContainer'

export default class PageContainer extends Component {
  constructor (props) {
    super(props)
    
    this.state = {
      focusActive: false,
    }
  }

  componentDidMount() {
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
      delay: (e, i) => i * 200,
    })
  }

  
  render() {
    const { scrollIndex, pageTitle, handleClick} = this.props
    const currentProject = this.nextProject()
    return(
      <div ref={refDiv => {this.container = refDiv}}  className={css(styles.pageContainerMain)} >
        <PageImage src={currentProject.mainImage} />
        <PageMenu  index={scrollIndex} name={currentProject.projectName} handleOpenProject={this.handleClick} />
        <PageTitle title={pageTitle} />
        <PageSelector />
        <PageArrow handleClick={handleClick} direction={'+'}/>
        <PageArrow handleClick={handleClick} direction={'-'} />
        { this.state.focusActive ? <PageDetailContainer currentData={currentProject} closePage={this.handleClick} /> : null }
      </div>
    )
  }


  nextProject = () => {
    return this.props.pageData[this.props.scrollIndex.currentItem]
  }


  handleClick = () => {
    const {focusActive} = this.state
    this.setState({focusActive: !focusActive})
    if(focusActive) {
      this.detailTransitionAnimation(1, 1)
      this.props.addListeners()
    } else {
      this.detailTransitionAnimation(0.6, 0.2)
      this.props.removeListeners()
    }
  }


  detailTransitionAnimation = (scale, opacity) => {
    Anime({
      targets: this.container.childNodes,
      scale: scale,
      duration: 600,
      opacity: opacity,
      easing: 'easeOutQuint'
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
  }
})
