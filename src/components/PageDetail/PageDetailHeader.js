import React, { Component, PropTypes } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import '../../styles/index.css'
import Fade from 'react-reveal/Fade';
import Rellax from 'rellax'
import {breakPoints} from '../../utils/styles'

export default class PageDetailHeader extends Component {
  componentDidMount() {
    if(window.innerWidth > 800) {
      const rellaxSlow = new Rellax("#rellax-slow", {
        wrapper: '#main-rellax',
        speed: -1.5,
      })
      const rellaxFast = new Rellax("#rellax-fast", {
        wrapper: '#main-rellax',
        speed: -2,
      })
    }
  }

  render() {
    const { name, close, description, role } = this.props        
    return (
      <div className={css(styles.modalNameContainer)}>
        <div id='rellax-fast'; className={css(styles.modalNameWrapper)} >
          <Fade cascade bottom>
            <div className={css(styles.modalName)}>{ name }</div>          
          </Fade>
        </div>
        <div id='rellax-slow' className={css(styles.date)}>{'2018 - '}</div>
        <div id='rellax-slow' className={css(styles.role)}>{role}</div>
        <div id='rellax-fast' className={css(styles.description)}>{description}</div>
      </div>
    )
  }


}

const styles = StyleSheet.create({
  modalNameContainer: {
    width: '100%',
    height: '100vh',
    marginBottom: '80vh',
    display: "grid",
    gridTemplateColumns: "repeat(8, 1fr)",
    gridTemplateRows: 'repeat(5, 1fr)',
  },
  modalNameWrapper: {
    gridColumn: '1/9',
    gridRow: '3/4',
  }, 
  modalName: {
    textAlign: 'center',
    fontFamily: ['Vollhorn', 'serif'],
    color: '#F2F2F2',
    border: '1px solid lightblue',
    transition: '0.3s font-size',
    fontSize: 80,
    [breakPoints.tablet]: {
      fontSize: 60
    },
    [breakPoints.mobile]: {
      fontSize: 40
    }
  },
  date: {
    color: '#F2F2F2',
    fontFamily: 'Inconsolata',
    width: '100%',
    textAlign: 'center',
    gridColumn: '7/8',
    // border: '1px solid lightgreen',
    gridRow: '4',
    // border: '1px solid red'
  },
  description: {
    gridColumn: '2/7',
    gridRow: '5',
    lineHeight: '150%',
    border: '1px solid yellow'
  },
  role: {
    gridColumn: '7/8',
    gridRow: '2/3',
    textAlign: 'center',
    // border: '1px solid lightgreen',
    fontSize: 10,
    whiteSpace: 'nowrap',
    [breakPoints.tablet]: {
      gridColumn: '6/8',
    },
    [breakPoints.mobile]: {
      gridColumn: '6/8',
    }
  }
})
