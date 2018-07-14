import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite/no-important'

export default class LandingContainer extends Component {

  render() {
    const { scrollIndex } = this.props
    const currentProject = this.nextProject()

    return(
      <div className={css(styles.landingContainerMain)} >
        {/* <PageImage src={currentProject.content[0].src} />
        <PageMenu  index={scrollIndex} name={currentProject.name} handleOpenProject={this.openProject} />
        <PageTitle title={"[ title ]"} />
        <PageSelector /> */}
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
  landingContainerMain: {
    height: '100vh',
    width: '100vw',
    display: 'grid',
    background: 'rgb(15,15,15)',
    gridTemplateColumns: 'repeat(10, auto)',
    gridTemplateRows: 'repeat(5, 20%)',
    color: 'white',
  }
})

