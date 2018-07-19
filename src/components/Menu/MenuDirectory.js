import React, { Component, PropTypes } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import { Link } from 'react-router-dom'
import Anime from 'animejs'
import {items} from '../../data/home-route-data.js'

export default class MenuDirectory extends Component {
  componentDidMount() {
    Anime.timeline().add({
      targets: this.container.children,
      height: '0%',
      duration: 0,
      translateY: '100%'
    }).add({
      targets: this.container.children,
      translateY: '0%',
      opacity: [0, 1],
      easing: 'easeInQuart',
      duration: 1000,
      delay: function(target, index) {
        return index * 40;
      },
    })
  }

  render() {
    const { closeMenu, paintingData } = this.props
    return (
      <div id="paintingView--mainContainer" ref={el => (this.container = el)} className={css(styles.paintingListContainer)}>
        {items.map(
          (item, index) => (
            <div className={css(styles.menuItemWrapper)}>
              <Link to={`${item.route}`} className={css(styles.itemLink)}>
                <img onClick={closeMenu}  src={`${item.svg}`} className={css(styles.menuItem)} alt=""/>
              </Link>
            </div>
          )
        )}
      </div>
    )
  }
}

const styles = StyleSheet.create({
  paintingListContainer: {
    height: '90vh',
    width: '100%',
    gridRow: '2/4',
    gridColumn: '5/6',
    color: 'black',
    cursor: 'pointer',
    zIndex: 10,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'left'
    // flexWrap: 'wrap',
    // border:'1px solid white',
    // flexBasis: 'fit-content'
  },
  menuItemWrapper: {
    width: '100%',
    height: '100%',
    border:'1px solid red',
    // textAlign:'right',
    fontFamily: 'Vollkorn',
    // padding: '5%',
    margin: '5%',
    opacity: '0.5',
    color: 'white',
    ":hover": {
      opacity: 1
    }
  },
  itemLink: {
    height: '100%',
    width: '100%',
  },
  menuItem: {
    height: '100',
    border:'1px solid white',
    opacity: '0.5'
  }
})
