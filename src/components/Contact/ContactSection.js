import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { StyleSheet, css } from 'aphrodite/no-important'
import Fade from 'react-reveal/Fade'
import Anime from 'animejs'

export default class ContactSection extends Component {
  render() {
    const { sectionTitle, sectionData, sectionCopy } = this.props    
    return (
      <div className={css(styles.sectionMain)}>
        
        {sectionTitle ? <Fade cascade><h2 className={css(styles.sectionHeader)}>{sectionTitle}</h2></Fade> : null}
        
        {sectionCopy ? (
          <div className={css(styles.sectionBody)}>
            {sectionCopy.map( (textLine, index) => <div className={css(styles.sectionBodyLine)}>{textLine}</div>  )}
          </div>
        ) : null }
        {sectionData ? (this.renderGrid(sectionData)) : null}
      </div>
    );
  }

  renderGrid = (sectionData) => {
    return (
      <div className={css(styles.sectionGrid)}>
        {sectionData.map( (icon, index) => (
          icon.url ? (
            <a href={`${icon.url}`} target="_blank" className={css(styles.gridIcon)}>
              <img className={css(styles.gridIcon)} key={`${icon.icon}`} src={`${icon.icon}`} alt=''/>        
            </a>
          ) : (
            <img className={css(styles.gridIcon)} key={`${icon.icon}`} src={`${icon.icon}`} alt=''/>        
          )
        ))}
      </div>
    )
  }
}

const styles = StyleSheet.create({
  sectionMain: {
    height: 'auto',
    width: '90%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    // alignContent: 'center',
    color: 'white',
    // border: '1px solid white',
    fontFamily: ['Inconsolata', 'serif'],
    marginTop: '20vh',
  },
  sectionHeader: {
    color:"white",
    fontSize:"18px",
    lineHeight: '120%',
    padding: '5%'
  },
  sectionBody: {
    lineHeight: '200%',
    fontSize:"15px",
    // border: '1px solid red',
    padding: '5%'
  },
  sectionBodyLine: {
    marginBottom: '4%'
  },
  sectionGrid: {
    height: 'auto',
    width: '80%',
    margin: '0 auto',
    marginBottom: '5%',
    display: "flex",
    flexDirection: "row",
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  gridIconWrapper: {
    // height: '7vw',
    // width: '7vw',
  },
  gridIcon: {
    height: '7vw',
    width: '7vw',
    margin: '5%',
    transition: '0.4s opacity',
    opacity: 0.7,
    ":hover": {
      opacity: 1
    }
  }
})
