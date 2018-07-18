import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite/no-important'
import Zoom from 'react-reveal/Zoom'
import Anime from 'animejs'

export default class ContactSection extends Component {
  componentDidMount() {
    const tl = Anime.timeline()
    tl.add({
      targets: ['#c--img'],
      opacity: 0,
      easing: 'easeInOutSine',
      duration: 0,
      delay: function(el, i) { return i * 250 },
    }).add({
      targets: ['#c--img'],
      translateY: ['0%'],
      opacity: 0.3,
      duration: 1000,
      easing: 'easeInQuart',
    })
  }

  render() {
    const { sectionTitle, sectionData, sectionCopy, sectionStyle } = this.props
    return (
      <div className={css(styles.sectionMain, sectionStyle)}>
        <h3 className={css(styles.sectionHeader)}>
          {sectionTitle}
        </h3>
        {sectionData ? (
          <div className={css(styles.sectionGrid)}>
            <Zoom cascade>
              {sectionData.map( (icon, index) => (
                // <div className={css(styles.iconWrapper)}>
                <img className={css(styles.icon)} key={`${icon}`} src={icon} alt=''/>
                // </div>
              ))}
            </Zoom>
          </div>
        ) : (
            <div className={css(styles.sectionBody)}>
              <Zoom cascade>
                {sectionCopy}
              </Zoom>
            </div>
        )}
      </div>
    );
  }
}

const styles = StyleSheet.create({
  sectionMain: {
    height: 'auto',
    width: '90%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    color: 'white',
    // border: '1px solid white',
    marginBottom: '50vh',
    fontFamily: ['Source Sans Pro', 'serif'],
  },
  sectionHeader: {
    color:"white",
    fontSize:"14px",
    lineHeight: '120%',
    alignText: 'block',
    marginBottom: '5vh',
    // border: '1px solid white',
    // fontFamily: ['Open Sans', 'serif'],
    // fontFamily:["Source Code Pro","sans-serif"],
  },
  sectionBody: {

  },
  sectionGrid: {
    // height: 'auto',
    width: '100%',
    display: "flex",
    flexDirection: "row",
    flexWrap: 'wrap',
    justifyContent: "space-evenly",
    // border: '1px solid green'
  },
  icon: {
    height: '100px',
    width: '100px',
    margin: '50px'
  }
})
