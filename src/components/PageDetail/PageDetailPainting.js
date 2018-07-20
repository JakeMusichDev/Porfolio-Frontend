import React, { Component, PropTypes } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import '../../styles/index.css'
import Anime from 'animejs'
import Fade from 'react-reveal/Fade';

export default class PageDetailPainting extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    // this.animateIn()
  }

  render() {
    return (
      <div id='photoview-focus-grid' className={css(styles.photoView_GridContainer)} >        
        {this.props.gridData.map((content, index) => (
          <div key={`${content.name} + ${index}`}>
            <img className={css(styles.img)} src={`${content}`} alt="photo" />
          </div>
        ))}
      </div>
    )
  }
}

const styles = StyleSheet.create({
  photoView_GridContainer: {
    height: 'auto',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gridRow: '3/4',
    gridColumn: '3/5'
  },
  img: {
    height: '90vh',
  }
})
