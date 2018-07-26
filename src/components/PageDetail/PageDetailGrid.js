import React, { Component, PropTypes } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import '../../styles/index.css'
import Anime from 'animejs'
import Fade from 'react-reveal/Fade';
import {breakPoints} from '../../utils/styles'

export default class PageDetailGrid extends Component {
  render() {
    return (
      <div id='photoview-focus-grid' className={css(styles.photoView_GridContainer)} >        
          {this.props.gridData.map((item, index) => (
            item.type === 'movie' ? (
              <video className={css(styles.image)} src={`${item.src}`} autoPlay></video>
            ) : (
              <Fade> 
                <div className={css(styles.subtitle)}>
                  {item.title}
                </div>
                <div className={css(styles.image)} style={{backgroundImage: `url(${item.src})`}} key={`${item.name} + ${index}`}></div>
              </Fade>
            )
          ))}
      </div>
    )
  }



}

const styles = StyleSheet.create({
  photoView_GridContainer: {
    height: 'auto',
    marginLeft: '15%',
    width: '70%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    padding: 5
  },
  image: {
    height: '75vh',
    width: '100%',
    marginBottom: '25vh',
    backgroundPosition: 'center center',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    transition: '0.3s margin-bottom',
    [breakPoints.mobile]: {
      marginBottom: '20vh',
    },
    [breakPoints.mobile]: {
      marginBottom: '10vh',

    }
  },
  subtitle: {
    width: '100%',
    textAlign: 'right',
    padding: '5%',
    fontSize: '10',
    [breakPoints.mobile]: {
      padding: '3%',
    },
    [breakPoints.mobile]: {
      padding: '1%',
    }
  }
})
