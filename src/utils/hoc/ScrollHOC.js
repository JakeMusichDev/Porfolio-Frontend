import React, { Component } from 'react'
import _ from 'underscore'
import Hammer from 'hammerjs'

export const withScrollMonitor = (WrappedComponent, list ) => {
  return class extends Component {
    constructor(props) {
      super(props)
      
      // Current state of the scroll 
      this.state = { currentItem: 0, direction: null }

      // Throttle the scroll event listener handler 
      this._scrollMonitor = _.throttle(this.scrollMonitor, 1200, {trailing: false})
    }
  
    componentDidMount() {
      this.initScroll()
      this.initSwipe()
    }
  
    componentWillUnmount() {
      window.removeEventListener('wheel', this._scrollMonitor, false)
      this.swipe.destroy()
    }

    initScroll = () => {
      this.wheelEvent = window.addEventListener('wheel', this._scrollMonitor, false)
    }

    initSwipe = () => {
      this.swipe = new Hammer.Manager(window, { recognizers: [[Hammer.Swipe]] })
      this.swipe.on("swipeup", () => this.setNewState('+'))
      this.swipe.on("swipedown", () => this.setNewState('-'))
    }

    scrollMonitor = wheelEvent => {
      const direction = wheelEvent.deltaY > 0 ? '-' : '+'
      this.setNewState(direction)
    }


    setNewState = (direction) => {
      const { currentItem } = this.state
      let nextItem
      if (direction === '+' && currentItem === (list.length - 1)) {
        nextItem = 0
      } else if (direction === '+' && currentItem >= 0) {
        nextItem = currentItem + 1
      } else if (direction === '-' && currentItem !== 0) {
        nextItem = currentItem - 1
      } else if (direction === '-' && currentItem === 0) {
        nextItem = (list.length - 1)
      } else return
      this.setState({ currentItem: nextItem, direction })
    }

    initEventMonitors = () => {
      this.initScroll()
      this.swipe.options.enable = true
    }

    pauseEventMonitors = () => {
      window.removeEventListener('wheel', this._scrollMonitor, false)
      this.swipe.options.enable = false 
    }

    render() {
      return (
        <WrappedComponent
          data={this.state} 
          addListeners={this.initEventMonitors} 
          handleClick={this.setNewState}
          removeListeners={this.pauseEventMonitors.bind(this)} 
          {...this.props} 
        />
      )
    }
  }
}

