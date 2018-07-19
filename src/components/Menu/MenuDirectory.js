import React, { Component, PropTypes } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import { Link } from 'react-router-dom'
import Anime from 'animejs'
import {items} from '../../data/home-route-data.js'

export default class MenuDirectory extends Component {
  componentDidMount() {
    // Anime.timeline().add({
    //   targets: this.container.children,
    //   height: '0%',
    //   duration: 0,
    //   translateX: '100%'
    // }).add({
    //   targets: this.container.children,
    //   translateX: '0%',
    //   opacity: [0, 1],
    //   easing: 'easeInQuart',
    //   duration: 1800,
    //   delay: function(target, index) {
    //     return index * 40;
    //   },
    // })
  }

  render() {
    const { closeMenu, paintingData } = this.props
    return (
      <div id="paintingView--mainContainer" ref={el => (this.container = el)} className={css(styles.paintingListContainer)}>
        {items.map(
          (item, index) => (
            <Link to={`${item.route}`} className={css(styles.menuListItem)}>
              <img onClick={closeMenu}  src={`${item.svg}`} className={css(styles.menuItem)} alt=""/>
            </Link>
          )
        )}
      </div>
    )
  }
}

const styles = StyleSheet.create({
  paintingListContainer: {
    height: 'auto',
    width: '100%',
    gridRow: '2/4',
    gridColumn: '5/6',
    color: 'black',
    cursor: 'pointer',
    zIndex: 10,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'right',
    // flexWrap: 'wrap',
    // border:'1px solid white',
    // flexBasis: 'fit-content'
  },
  menuListItem: {
    height: 'auto',
    // width: '100%',
    // border:'1px solid white',
    textAlign:'right',
    fontFamily: 'Vollkorn',
    fontSize:12,
    fontWeight:200,
    textDecoration:"none",
    outline:"none",
    padding: '5%',
    opacity: '0.5',
    color: 'white',
  },
  menuItem: {
    height: 50,
  }
})
