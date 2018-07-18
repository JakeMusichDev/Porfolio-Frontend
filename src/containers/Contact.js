import React, {
  Component, PropTypes
} from 'react';
import { StyleSheet, css } from 'aphrodite/no-important'

import Anime from 'animejs'
import ContactName from '../components/Contact/ContactName'
import ContactSkillSection from '../components/Contact/ContactSkillSection'
import ContactSocials from '../components/Contact/ContactSocials'

import vid from '../assets/contacts/vid.mp4'
import {contactCopy} from '../utils/copy.js'
import Zoom from 'react-reveal'

export default class Contact extends Component {
  componentDidMount() {
    Anime.timeline().add({
      targets: this.contactContainer.childNodes,
      duration: 0,
      translateY: '100%', 
    }).add({
      targets: this.contactContainer.childNodes,
      duration: 1000,
      translateY: '0%', 
    })
  }
  render() {
    return (
      <div id="contact--mainContainer" ref={ref => {this.contactContainer = ref}} className={css(styles.contactContainer)}>
        <ContactName/> 
        <div className={css(styles.rightSide)}>
          <ContactSkillSection />
          <ContactSocials />
        </div>
      </div>
    )
  }
}

const styles = StyleSheet.create({
  contactContainer: {
    height: '100vh',
    width: '100vw',
    display: 'block',
    overflowY: 'scroll'
  },
  leftSide: {
    height: '100%',
    width: '10%',
    float: 'left',
    border:"1px solid pink"
  },
  rightSide: {
    height: '100%',
    width: '80%',
    marginLeft: '10vw',
    // float: 'right',
    display: 'grid',
    gridRow: 'repeat(auto, 10)',
    gridColumn: 'repeat(auto, 10)',
    // border:"1px solid pink"
  }
})
