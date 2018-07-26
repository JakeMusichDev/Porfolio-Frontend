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
            <div id='painting-image' className={css(styles.image)} style={{backgroundImage: `url(${content})`}}></div>
          </div>
        ))}
      </div>
    )
  }
}

const styles = StyleSheet.create({
  photoView_GridContainer: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gridRow: '3/4',
    gridColumn: '2/9'
  },
  image: {
    height: '80vh',
    width: 'auto',
    backgroundPosition: 'center center',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat'
  }
})
