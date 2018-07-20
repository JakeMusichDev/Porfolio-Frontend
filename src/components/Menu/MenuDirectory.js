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
    const { closeMenu } = this.props
    return (
      <div ref={el => (this.container = el)} className={css(styles.menuDirectoryContainer)}>
        {items.map( (item, index) => (
          <div onClick={closeMenu} className={css(styles.menuItemWrapper)}>
            {item.name}
            {/* <Link to={`${item.route}`} className={css(styles.itemLink)}>
              <img onClick={closeMenu}  src={`${item.svg}`} className={css(styles.menuItem)} alt=""/>
            </Link> */}
            {/* <Link to={`${item.route}`} className={css(styles.itemLink)}>
              <div className={css(styles.menuItem)}>{item.name}</div>
            </Link> */}
          </div>
        ))}
      </div>
    )
  }
}

const styles = StyleSheet.create({
  menuDirectoryContainer: {
    height: '100%',
    width: '100%',
    // gridRow: '2/4',
    // gridColumn: '5/6',
    color: 'black',
    cursor: 'pointer',
    zIndex: 10,
    display: 'flex',
    flexDirection: 'column',
    // alignItems: 'left'
    // flexWrap: 'wrap',
    border:'1px solid black',
    // flexBasis: 'fit-content'
  },
  menuItemWrapper: {
    width: '40%',
    marginLeft: '40%',
    right: 0,
    // height: '10vw',
    // border:'1px solid red',
    // textAlign:'right',
    fontFamily: 'Vollkorn',
    fontSize: "4vw",
    padding: '5%',
    // margin: '5%',
    // opacity: '0.5',
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
