import React, { Component } from 'react'
import _ from 'underscore'

export const withScrollMonitor = (WrappedComponent, list ) => {
  return class extends Component {
    constructor(props) {
      super(props)
      
      // Current state of the scroll 
      this.state = { currentItem: 0, direction: null }

      // Throttle the scroll event listener handler 
      this._scrollMonitor = _.throttle(this.scrollMonitor, 1500, {trailing: false})
    }
  
    componentDidMount() {
      this.wheelEvent = window.addEventListener('wheel', this._scrollMonitor)
      console.log(this.wheelEvent)
    }
  
    componentWillUnmount() {
      window.removeEventListener('wheel', this.wheelEvent)
    }

    
    scrollMonitor = wheelEvent => {
      const direction = wheelEvent.deltaY > 0 ? '+' : '-'
      const { currentItem } = this.state
      let nextItem
      
      
      if (direction === '+' && currentItem === list.length) {
        nextItem = 0
      } else if (direction === '+' && currentItem >= 0) {
        nextItem = currentItem + 1
      } else if (direction === '-' && currentItem !== 0) {
        nextItem = currentItem - 1
      } else if (direction === '-' && currentItem === 0) {
        nextItem = list.length
      } else {
        return
      }
  
      this.setState({ currentItem: nextItem, direction })
    }
  
    render() {
      const { currentItem, direction } = this.state
  
      return <WrappedComponent data={currentItem} {...this.props} />
    }
  

  }
}

