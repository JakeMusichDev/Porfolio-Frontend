import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite/no-important'
import Fade from 'react-reveal/Fade'
import Anime from 'animejs'

export default class ContactSection extends Component {
  render() {
    const { sectionTitle, sectionData, sectionCopy } = this.props    
    return (
      <div className={css(styles.sectionMain)}>
        
        {sectionTitle ? <Fade cascade><h2 className={css(styles.sectionHeader)}>{sectionTitle}</h2></Fade> : null}
        
        {sectionCopy ? <div className={css(styles.sectionBody)}>{sectionCopy}</div> : null }
        {sectionData ? (
          <div className={css(styles.sectionGrid)}>
            {sectionData.map( (icon, index) => <img className={css(styles.gridIcon)} key={`${icon.icon}`} src={`${icon.icon}`} alt=''/> )}
          </div>
          ) : null
        }
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
    padding: '5%'
  },
  sectionGrid: {
    // height: 'auto',
    width: '100%',
    display: "flex",
    flexDirection: "row",
    flexWrap: 'wrap',
    justifyContent: 'right',
    alignItems: 'right'
    // justifyContent: "space-evenly",
    // border: '1px solid green'
  },
  gridIcon: {
    height: '5%',
    width: '5%',
    margin: '5%'
  }
})
