import React, { Component } from 'react'
import _ from 'underscore'

export const viewportVisible = ( WrappedComponent, wrapperId ) => {
  return class extends Component {
    constructor(props) {
      super(props)
      
      // Current state of the scroll 
      this.state = { visible: false }

      this._visibilityMonitor = _.throttle(this.visibilityMonitor, 100, {trailing: false})
    }
  
    componentDidMount() {
      this.addListeners()
    }
  
    componentWillUnmount() {
      this.removeListeners()
    }

    addListeners = () => {
      this.wrapper = document.getElementById(`${wrapperId}`)
      this.wrapper.addEventListener('scroll', this._visibilityMonitor, false)
    }

    removeListeners = () => {
      window.removeEventListener('wheel', this._visibilityMonitor, false)
    }

    visibilityMonitor = () => {
      
    }

    render() {
      return (
        <WrappedComponent
          {...this.props} 
        />
      )
    }

  }
}

