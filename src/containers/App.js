import React, { Component } from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import { StyleSheet, css } from 'aphrodite/no-important'
import '../styles/index.css'
import * as PIXI from 'pixi.js'
// import cursorDot from '../../assets/app/Ellipse2.png'

// import Menu from './Menu'
import Header from '../components/Header/Header'
import { Routes } from '../routes/Routes'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      menuActive:false
    }
    // this.loadPixi()
  }

  render() {
    const { menuActive } = this.state
    return (
      <Router>
        <div className={css(styles.app)}>
          <Header handleMenuActiveState={this.handleMenuActiveState} />
          <Routes />
          {/* {menuActive &&
            // <Menu /> 
          } */}
        </div>
      </Router>
    )
  }

  handleMenuActiveState = e => {
    console.log(this.state.menuActive)
    this.setState({menuActive: !this.state.menuActive})
  }
}

const styles = StyleSheet.create({
  app: {
    display:'block',
    height:'100vh',
    width: '100vw',
    // cursor: `url(${cursorDot}) 2 2, pointer`
  }
})