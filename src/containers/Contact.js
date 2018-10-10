import React, {
  Component, PropTypes
} from 'react';
import { StyleSheet, css } from 'aphrodite/no-important'

import Anime from 'animejs'
import ContactName from '../components/Contact/ContactName'
import ContactSection from '../components/Contact/ContactSection'
import { contactCopy, skillsData, socialsData } from '../data/contactData'
import Fade from 'react-reveal'
import { breakPoints } from '../utils/styles'

export default class Contact extends Component {
  // componentDidMount() {
  //   Anime.timeline().add({
  //     targets: [this.leftSideDiv.childNodes],
  //     translateX: '-100%',
  //     duration: 0,
  //     opacity: 0
  //   }).add({
  //     targets: [this.rightSideDiv.childNodes],
  //     translateY: '100%',
  //     duration: 0,
  //     opacity: 0
  //   }).add({
  //     targets: [this.rightSideDiv.childNodes, this.leftSideDiv.childNodes],
  //     translateX: '0%',
  //     translateY: '0%',
  //     duration: 1000,
  //     opacity: 1,
  //     easing: 'easeInSine',
  //     delay: (e, i) => i * 120,
  //   })
  // }

  render() {
    return (
      <div id="contact--mainContainer" ref={ref => {this.contactContainer = ref}} className={css(styles.contactContainer)}>
        <div  ref={ref => {this.leftSideDiv = ref}} className={css(styles.leftSide)}>
          <ContactName />
        </div>
        <div id='contact--rightContainer' ref={refDiv => (this.rightSideDiv = refDiv)} className={css(styles.rightSide)}>
          <ContactSection sectionTitle={"Hi, I'm Jake."} />
          <ContactSection sectionCopy={contactCopy.bioIntro} />
          <ContactSection sectionTitle={'Socials'} sectionData={socialsData} />
          <ContactSection sectionTitle={'Skills'} sectionData={skillsData} />
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
    overflowY: 'scroll',
    '-webkit-overflow-scrolling': 'touch'
  },
  leftSide: {
    height: '100%',
    width: '25%',
    float: 'left',
  },
  rightSide: {
    height: 'auto',
    width: '75%',
    float: 'right',
  },
  header: {
    // marginTop: '10vh',
    border:"1px solid lightblue"
  }
})
