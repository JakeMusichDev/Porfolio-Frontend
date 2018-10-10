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
    const height = this.height
    return (
      <div className={css(styles.nameSvgContainer)}>
        <div className={css(styles.name)}>
          Email Me
        </div>
        <img  ref={refDiv => {this.wrappedRellaxImage = refDiv}} className={css(styles.nameSvg)} src={`${name_lg}`} alt=""/>
      </div>
    )
  }
}

const styles = StyleSheet.create({
  nameSvgContainer: {
    height: '200vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    padding: '1%',
    opacity: 0.3,
    // border: '1px solid pink'
  },
  nameSvg: {
    height:"150vh",
    width:"auto"
  }
})
