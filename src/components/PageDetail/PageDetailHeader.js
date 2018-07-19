import React, { Component, PropTypes } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import '../../styles/index.css'
import Fade from 'react-reveal/Fade';

export default class PageDetailHeader extends Component {
  render() {
    const { name, close, description, role } = this.props    
    console.log(description);
    
    return (
      <div className={css(styles.modalNameContainer)}>
        <div className={css(styles.modalNameWrapper)}>
          <Fade cascade bottom>
            <div className={css(styles.modalName)}>{ name }</div>          
          </Fade>
        </div>
        <div className={css(styles.date)}>
          2018 - 
        </div>
        <div className={css(styles.description)}>
          {description}
        </div>
      </div>
    )
  }
}

const styles = StyleSheet.create({
  modalNameContainer: {
    width: '100%',
    height: '50vh',
    display: "grid",
    gridTemplateColumns: "repeat(8, 1fr)",
    gridTemplateRows: 'repeat(4, 1fr)',
    border: '1px solid red'
  },
  modalNameWrapper: {
    // overflow: 'hidden',
    gridColumn: '1/9',
    gridRow: '3/4',
  }, 
  modalName: {
    textAlign: 'center',
    fontFamily: ['Vollhorn', 'serif'],
    color: '#F2F2F2',
    fontSize: 100
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
    gridColumn: '7/8',
    gridRow: '4/5',
  },
  para: {
    position: 'fixed',
    height: 100
  }
})
