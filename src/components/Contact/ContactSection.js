import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite/no-important'
import Fade from 'react-reveal/Zoom'
import Anime from 'animejs'

export default class ContactSection extends Component {
  render() {
    const { sectionTitle, sectionData, sectionCopy, sectionStyle } = this.props
    return (
      <div className={css(styles.sectionMain, sectionStyle)}>
        <h3 className={css(styles.sectionHeader)}>
          {sectionTitle}
        </h3>
        {sectionData ? (
          <div className={css(styles.sectionGrid)}>
            
              {sectionData.map( (icon, index) => (
                // <div className={css(styles.iconWrapper)}>
                <Fade cascade>
                  <img className={css(styles.icon)} key={`${icon}`} src={icon} alt=''/>
                </Fade>
                // </div>
              ))}
          </div>
        ) : (
            <div className={css(styles.sectionBody)}>
              <Fade cascade>
                {sectionCopy}
              </Fade>
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
