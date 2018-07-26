import React, { Component } from 'react';
import { css } from 'aphrodite/no-important'
import Anime from 'animejs'
import "../../styles/index.css"
import { withScrollMonitor } from '../../utils/hoc/ScrollHOC'
import { mainStyles, textStyles } from './LandingContainerStyle'
import { items } from '../../data/routeData.js'

import LandingText from './LandingText'
import LandingMenu from './LandingMenu'
import LandingImage from './LandingImage'
import LandingCounter from './LandingCounter'
import ScrollIndicator from '../General/ScollIndicator'

class LandingContainer extends Component {
  componentDidMount() {
    Anime.timeline().add({
      targets: [this.container.childNodes],
      translateX: '10%',
      duration: 0,
      opacity: 0
    }).add({
      targets: this.container.childNodes,
      translateX: '0%',
      duration: 1000,
      opacity: 1,
      easing: 'easeInOutQuad',
      delay: (e, i) => i * 100,
    })
  }
  
  render() {
    const { data } = this.props
    const currentProject = this.nextProject()
    return(
      <div id='landing-container' ref={refDiv => {this.container = refDiv}} className={css(mainStyles.landingContainerMain)} >
        <LandingMenu scrollState={data} open={this.openPage} />
        <LandingImage src={currentProject.src} />
        {/* <ScrollIndicator gridPos={mainStyles.gridPos} /> */}
        <LandingCounter index={data.currentItem} />
        <LandingText text={' - Artist'} mainStyle={textStyles.artist} />
        <LandingText text={' - Developer'} mainStyle={textStyles.dev} />
        <LandingText text={' - Jake Musich'} mainStyle={textStyles.name} />
        <LandingText text={'[ Portfolio ]'} mainStyle={textStyles.portfolio} />
      </div>
    )
  }

  nextProject = () => {
    const { data } = this.props
    return items[data.currentItem]
  }

  openPage = (e, item) => {
    this.props.history.push(`${item.route}`)
  }
}



const LandingWithScroll = withScrollMonitor(LandingContainer, items)
export default LandingWithScroll