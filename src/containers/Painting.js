import React, { Component, } from 'react'

import PageContainer from '../components/Page/PageContainer'
import { withScrollMonitor } from '../hoc/ScrollHOC'
import { paintingData } from '../data/paintingData'


class Painting extends Component {
  render() {
    const { data } = this.props 
    return <PageContainer pageData={paintingData} scrollIndex={data} pageTitle={'[ Painting ]'} />
  }
}

const PhotographyWithScroll = withScrollMonitor(Painting, paintingData)
export default PhotographyWithScroll