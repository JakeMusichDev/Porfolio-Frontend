import React, { Component } from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import { StyleSheet, css } from 'aphrodite/no-important'

import MenuContainer from './MenuContainer'
import Header from '../components/Header/Header'
import { Routes } from '../routes/Routes'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      menuActive:false
    }
  }

  render() {
    const { menuActive } = this.state
    return (
      <Router>
        <div className={css(styles.app)}>
          <Header handleMenuActiveState={this.handleMenuActiveState} />
          <Routes />
          {menuActive && <MenuContainer closeMenu={this.handleMenuActiveState} /> }
        </div>
      </Router>
    )
  }

  handleMenuActiveState = e => {
    this.setState({menuActive: !this.state.menuActive})
  }
}

const styles = StyleSheet.create({
  app: {
    display:'block',
    height:'100vh',
    width: '100vw',
    background: 'rgb(15,15,15)',
  }
})
