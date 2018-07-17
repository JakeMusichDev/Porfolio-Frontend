import React, { Component, } from 'react'
import _ from 'underscore'
import Anime from 'animejs'

import PageContainer from '../components/Page/PageContainer'

import {withScrollMonitor} from '../hoc/ScrollHOC'
import {photographyGridData } from '../data/photoData'


class Photography extends Component {
  render() {
    const { data } = this.props 
    return <PageContainer pageData={photographyGridData} scrollIndex={data} pageTitle={'[ photography ]'} />
  }
}

const PhotographyWithScroll = withScrollMonitor(Photography, photographyGridData)
export default PhotographyWithScroll