import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite/no-important'
import Anime from 'animejs'

// import ProjectMainImage from '../ProjectMainImage/ProjectMainImage'
import PageMenu from './PageMenu'
import {PageTitle} from './PageTitle'
import PageImage from './PageImage';
import { PageSelector } from './PageSelector';
import { PageArrow } from './PageArrow'
import PageDetailContainer from './PageDetailContainer'

export default class PageContainer extends Component {
  constructor (props) {
    super(props)
    
    this.state = {
      focusActive: false,
    }
  }

  componentDidMount() {
    console.log(this.container.childNodes);
    
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
      delay: (e, i) => i * 100,
    })
  }

  
  render() {
    const { scrollIndex, pageTitle } = this.props
    const currentProject = this.nextProject()
    return(
      <div ref={refDiv => {this.container = refDiv}}  className={css(styles.pageContainerMain)} >
        <PageArrow handleClick={this.nextProject} direction={'+'}/>
        <PageArrow handleClick={this.nextProject} direction={'-'} />
        <PageImage src={currentProject.mainImage} />
        <PageMenu  index={scrollIndex} name={currentProject.projectName} handleOpenProject={this.openProject} />
        <PageTitle title={pageTitle} />
        <PageSelector />
        { this.state.focusActive ? <PageDetailContainer currentData={currentProject} /> : null }
      </div>
    )
  }

  nextProject = () => {
    return this.props.pageData[this.props.scrollIndex.currentItem]
  }

  openProject = (e) => {
    this.setState({focusActive:true})
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

