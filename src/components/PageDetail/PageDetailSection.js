import React, { Component, PropTypes } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import '../../styles/index.css'
import Anime from 'animejs'
import Fade from 'react-reveal/Fade';

export default class PageDetailSection extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    // this.animateIn()
  }

  renderSection = (type) => {
    if (type === 'image') {
      return <SectionImage src={this.props.sectionData.src} />
    } else if (type === 'header') {
      return <SectionHeader text={this.props.sectionData.text} />
    }
  }

  render() {
    const { sectionData } = this.props
    return (
      <div className={css(styles.detailSectionContainer)} >
        {this.renderSection(sectionData.type)}
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
      duration: 0,
    })
    .add({
      targets: [gridContainer.children],
      opacity: [1],
      duration: 800,
      scale: 1,
      easing: 'easeInExpo',
      offset: '+=200',
      delay: function(target, index) {
        return index * 100
      },
    })
  }
}

const SectionImage = (props) => {
  return (
    <div className={css(styles.image)}>
      <img src={`${props.src}`} alt=""/>
    </div>
  )
}

const SectionHeader = (props) => {
  return (
    <div className={css(styles.image)}>
      {props.headerText}
    </div>
  )
}

const styles = StyleSheet.create({
  detailSectionContainer: {
    height: 'auto',
    marginLeft: '15%',
    width: '70%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    border: '1px solid white',
    padding: 5
  },
  image: {
    marginBottom: 50,
    height: 'auto',
    width: '20%',
  }
})
