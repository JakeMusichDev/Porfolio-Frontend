import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite/no-important'

// import ProjectMainImage from '../ProjectMainImage/ProjectMainImage'
import PageMenu from '../PageMenu/PageMenu'
import {PageTitle} from '../PageTitle/PageTitle'
import PageImage from '../PageImage/PageImage';
import { PageSelector } from '../PageSelector/PageSelector';

export default class PageContainer extends Component {

  render() {
    const { scrollIndex } = this.props
    const currentProject = this.nextProject()

    return(
      <div className={css(styles.pageContainerMain)} >
        <PageImage src={currentProject.content[0].src} />
        <PageMenu  index={scrollIndex} name={currentProject.name} handleOpenProject={this.openProject} />
        <PageTitle title={"[ title ]"} />
        <PageSelector />
      </div>
    )
  }

  nextProject = () => {
    const { pageData, scrollIndex} = this.props
    return pageData[scrollIndex]
  }

  openProject = (e) => {
    
  }

}

const styles = StyleSheet.create({
  pageContainerMain: {
    height: '100vh',
    width: '100vw',
    display: 'grid',
    background: 'rgb(15,15,15)',
    gridTemplateColumns: 'repeat(10, auto)',
    gridTemplateRows: 'repeat(5, 20%)',
    color: 'white',
  }
})

