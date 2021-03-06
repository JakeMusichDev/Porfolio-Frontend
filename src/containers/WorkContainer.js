import React, { Component, } from 'react'
import _ from 'underscore'
import Anime from 'animejs'

import PageContainer from '../components/Page/PageContainer'

import {withScrollMonitor} from '../utils/hoc/ScrollHOC'
import { workProjectData } from '../data/workData'


class WorkContainer extends Component {
  render() {
    const { data } = this.props 
    return <PageContainer pageData={workProjectData} scrollIndex={data} pageTitle={'[ development ]'} {...this.props} />
  }
}

const WorkWithScroll = withScrollMonitor(WorkContainer, workProjectData)
export default WorkWithScroll