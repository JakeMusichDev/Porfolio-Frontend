import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite/no-important'
import Anime from 'animejs'
import name_lg from '../../assets/about/name_lg.svg'
import Rellax from 'rellax'
export default class ContactName extends Component {

  componentDidMount() {
    const rellax = new Rellax(this.wrappedRellaxImage, {
      wrapper: '#contact--mainContainer'
    })
  }

  // componentWillUnmount() {
  //   window.removeEventListener('resize', this.setContainerSize, this)
  // }

  // componentDidMount() {
  //   this.setContainerSize()
  //   window.addEventListener('resize', this.setContainerSize)
  // }

  // setContainerSize = () => {
  //   this.height = document.getElementById('contact--rightContainer').getBoundingClientRect().height
  // }

  render() {
    const height = this.height
    return (
      <div className={css(styles.nameSvgContainer)}>
        <img  ref={refDiv => {this.wrappedRellaxImage = refDiv}} className={css(styles.nameSvg)} src={`${name_lg}`} alt=""/>
      </div>
    )
  }
}

const styles = StyleSheet.create({
  nameSvgContainer: {
    height: '300vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    padding: '1%',
    // border: '1px solid pink'
  },
  nameSvg: {
    height:"100vh",
    // border: '1px solid green',
    width:"auto"
  }
})
