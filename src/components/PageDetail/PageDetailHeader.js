import React, { Component, PropTypes } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import '../../styles/index.css'
import Fade from 'react-reveal/Fade';
import Rellax from 'rellax'

export default class PageDetailHeader extends Component {
  componentDidMount() {
    const rellaxSlow = new Rellax("#rellax-slow", {
      wrapper: '#main-rellax',
      speed: -2,
    })
    const rellaxFast = new Rellax("#rellax-fast", {
      wrapper: '#main-rellax',
      speed: -3,
    })
  }

  render() {
    const { name, close, description, role } = this.props        
    return (
      <div className={css(styles.modalNameContainer)}>
        <div id='rellax-fast' ata-rellax-percentage="0.5" className={css(styles.modalNameWrapper)} >
          <Fade cascade bottom>
            <div className={css(styles.modalName)}>{ name }</div>          
          </Fade>
        </div>
        <div id='rellax-slow' className={css(styles.date)}>
          2018 - 
        </div>
        <div id='rellax-slow'  className={css(styles.description)}>
          {description}
        </div>
        <div className={css(styles.role)}>
          {role}
        </div>
      </div>
    )
  }


}

const styles = StyleSheet.create({
  modalNameContainer: {
    width: '100%',
    height: '100vh',
    display: "grid",
    gridTemplateColumns: "repeat(8, 1fr)",
    gridTemplateRows: 'repeat(5, 1fr)',
    // border: '1px solid red'
  },
  modalNameWrapper: {
    gridColumn: '1/9',
    gridRow: '3/4',
  }, 
  modalName: {
    textAlign: 'center',
    fontFamily: ['Vollhorn', 'serif'],
    color: '#F2F2F2',
    fontSize: 80
  },
  date: {
    color: '#F2F2F2',
    fontFamily: 'Inconsolata',
    width: '100%',
    textAlign: 'center',
    gridColumn: '7/8',
    gridRow: '4/5',
    // border: '1px solid red'
  },
  description: {
    gridColumn: '2/5',
    gridRow: '4',
    lineHeight: '150%'
    // border: '1px solid yellow'
  },
  role: {
    gridColumn: '7/8',
    gridRow: '2/3',
    textAlign: 'center',
    fontSize: 10
  }
})
