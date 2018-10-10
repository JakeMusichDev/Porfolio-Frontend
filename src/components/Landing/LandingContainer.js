import React, { Component } from 'react';
import { css } from 'aphrodite/no-important'
import Anime from 'animejs'
import "../../styles/index.css"
import { withScrollMonitor } from '../../utils/hoc/ScrollHOC'
import { mainStyles, textStyles } from './LandingContainerStyle'
import { items } from '../../data/routeData.js'

import LandingText from './LandingText'
import LandingMenu from './LandingMenu'
import LandingName from './LandingName'
import LandingImage from './LandingImage'
import LandingUpperLogo from './LandingUpperLogo'
import LandingCounter from './LandingCounter'
import ScrollIndicator from '../General/ScollIndicator'

class LandingContainer extends Component {  
  render() {
    const { data } = this.props
    const currentProject = this.nextProject()
    return(
      <div 
        ref={refDiv => {this.container = refDiv}} 
        className={css(mainStyles.landingContainerMain)} 
      >
        <LandingMenu scrollState={data} open={this.openPage} />
        <LandingName />
        <LandingUpperLogo />
        <LandingImage src={currentProject.src} />
        <LandingText text={'[ Freelance Developer & Designer ]'} mainStyle={textStyles.bio} />
        <LandingText text={'[ Portfolio ]'} mainStyle={textStyles.portfolio} />
        <LandingText text={'© 2018'} mainStyle={textStyles.year} />
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