import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite/no-important'
import Fade from 'react-reveal'
import Anime from 'animejs'

import {contactCopy} from '../../utils/copy'
import {techSkillIcons} from '../../data/techIconData'

export default class ContactSkillSection extends Component {
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
    return (
      <div className={css(styles.skillSection)}>
        <h3 className={css(styles.skillHeader)}>
          Skills & Frameworks
        </h3>
        <div className={css(styles.skillIconGrid)}>
        <Fade>
            {techSkillIcons.map( (icon, index) => (
              // <div className={css(styles.iconWrapper)}>
                <img className={css(styles.icon)} key={`${icon}`} src={icon} alt=''/>
              // </div>
            ))}
        </Fade>
        </div>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  skillSection: {
    height: 'auto',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    color: 'white',
    // border: '1px solid white',
    marginBottom: '50vh'
  },
  skillHeader: {
    color:"white",
    fontSize:"14px",
    lineHeight: '120%',
    alignText: 'block',
    marginBottom: '5vh',
    // border: '1px solid white',
    fontFamily: ['Inconsolata', 'serif'],
    // fontFamily:["Source Code Pro","sans-serif"],
  },
  skillIconGrid: {
    // height: 'auto',
    width: '100%',
    display: "flex",
    flexDirection: "row",
    flexWrap: 'wrap',
    justifyContent: "space-evenly",
    // border: '1px solid green'
  },
  iconWrapper: {

  },
  icon: {
    height: '100px',
    width: '100px',
    margin: '50px'
  }
})
