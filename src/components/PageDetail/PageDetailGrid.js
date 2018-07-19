import React, { Component, PropTypes } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import '../../styles/index.css'
import Anime from 'animejs'
import Fade from 'react-reveal/Fade';

export default class PageDetailGrid extends Component {
  render() {
    return (
      <div id='photoview-focus-grid' className={css(styles.photoView_GridContainer)} >        
          {this.props.gridData.map((item, index) => (
            <Fade> 
              <div className={css(styles.image)} style={{backgroundImage: `url(${item.src})`}} key={`${item.name} + ${index}`}></div>
            </Fade>
          ))}
      </div>
    )
  }

  animateIn = () => {
    const gridContainer = document.getElementById("photoview-focus-grid")
    const tl = Anime.timeline()
    tl
    .add({ 
      targets: gridContainer.children,
      opacity: 0,
      scale: 0.9,
      duration: 0,
    })
    .add({
      targets: [gridContainer.children],
      opacity: [1],
      duration: 800,
      scale: 1,
      easing: 'easeInExpo',
      // delay: 2000,
      offset: '+=200',
      elasticity: function(target, index, totalTargets) {
        return 200 + ((totalTargets - index) * 200);
      },
      delay: function(target, index) {
        return index * 100
      },
    })
    // .add({
    //   targets: gridContainer.children,
    //   // translateY: '0%',
    //   duration: 800,
    //   easing: 'easeInQuart',
    //   complete: () => console.log('complete')
    // })
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
    backgroundRepeat: 'no-repeat'
  }
})
