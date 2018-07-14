import React, { Component, } from 'react'
import _ from 'underscore'
import Anime from 'animejs'

import PageContainer from '../components/Page/PageContainer'
import PageMenu from '../components/PageMenu/PageMenu'

import {withScrollMonitor} from '../hoc/ScrollHOC'
import {photographyGridData } from '../utils/data'


class Painting extends Component {
  render() {
    const { data } = this.props 
    return <PageContainer pageData={photographyGridData} scrollIndex={data} />
  }
}

const PhotographyWithScroll = withScrollMonitor(Painting, photographyGridData)
export default PhotographyWithScroll