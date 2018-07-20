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

  render() {
    return (
      <div className={css(styles.flickerImgContainer)}>
        <img ref={refDiv => {this.wrappedRellaxImage = refDiv}} className={css(styles.img)} src={`${name_lg}`} alt=""/>
      </div>
    )
  }
}

const styles = StyleSheet.create({
  flickerImgContainer: {
    height: '200vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    // border: '1px solid pink'
  },
  img: {
    height:"100vh",
    // border: '1px solid green',
    width:"auto"
  }
})
