import React, { Component, } from 'react'
import { withScrollMonitor } from '../utils/hoc/ScrollHOC'

import PageContainer from '../components/Page/PageContainer'

import { photographyGridData } from '../data/photoData'


class Photography extends Component {
  render() {
    const { data } = this.props 
    return <PageContainer pageData={photographyGridData} scrollIndex={data} pageTitle={'[ photography ]'} {...this.props}/>
  }
}

const PhotographyWithScroll = withScrollMonitor(Photography, photographyGridData)
export default PhotographyWithScroll