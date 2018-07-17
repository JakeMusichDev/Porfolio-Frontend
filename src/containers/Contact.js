import React, {
  Component, PropTypes
} from 'react';
import { StyleSheet, css } from 'aphrodite/no-important'
import Anime from 'animejs'
// import Name from '../components/contact-components/Name'
// import Socials from '../components/contact-components/Socials'
// import ContactBio from '../components/contact-components/ContactBio'
// import ContactSection from '../components/contact-components/ContactSection'
// import nameSvg from '../../assets/name_lg.svg'
import vid from '../assets/contacts/vid.mp4'
import {contactCopy} from '../utils/copy.js'

export default class Contact extends Component {
  componentDidMount() {
  }

  render() {
    return (
      <div id="contact--mainContainer" className={css(styles.contactContainer)}>
        {/* <div ref={ el => this.leftSection = el } className={css(styles.leftSide)}>
          <Name />
        </div>
        <div ref={ el => this.rightSection = el } className={css(styles.rightSide)}>
          <ContactSection />
        </div> */}
        <div className={css(styles.rightSide)}>
          <video src={`${vid}`} autoPlay loop></video>
        </div>
      </div>
    )
  }
}

const styles = StyleSheet.create({
  contactContainer: {
    height: '100vh',
    width: '100vw',
    background: 'rgb(15,15,15)',
    display: 'block',
    overflowY: 'scroll'
  },
  leftSide: {
    height: '100%',
    width: '35%',
    background: 'rgb(15,15,15)',
    float: 'left',
    willChange: 'transform'
  },
  rightSide: {
    height: '100%',
    width: '65%',
    float: 'right',
    // display: 'block',
    // border:"1px solid pink",
    display: 'grid', 
    gridTemplateColumns: 'repeat(5, 20%)',
    gridTemplateRows: 'repeat(5, 20%)',
  }
})
