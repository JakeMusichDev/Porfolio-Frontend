import React, { Component, PropTypes } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import {flex} from '../../styles/styleUtils'
import { Link } from 'react-router-dom'
import Anime from 'animejs'
import {items} from '../../data/home-route-data.js'

export default class MenuDirectory extends Component {
  componentDidMount() {
    Anime.timeline().add({
      targets: '#menu-item-name',
      height: '0%',
      duration: 0,
      opacity: 0,
      translateY: '100%'
    }).add({
      targets: '#menu-item-name',
      translateY: '0%',
      opacity: [1],
      easing: 'easeInQuart',
      duration: 900,
      delay: function(target, index) {
        return index * 50;
      },
    })
  }

  render() {
    const { closeMenu } = this.props
    return (
      <div ref={el => (this.container = el)} className={css(styles.menuDirectoryContainer, flex.flexCenter)}>
        {items.map( (item, index) => (
          <div onClick={closeMenu} className={css(styles.menuItemWrapper)}>
            <Link to={`${item.route}`} style={{textDecoration: 'none'}}>
              <div id='menu-item-name' className={css(styles.menuItem)}>{item.name}</div>
            </Link>
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
    alignItems: 'center',

    // flexWrap: 'wrap',
    border:'1px solid black',
    // flexBasis: 'fit-content'
  },
  menuItemWrapper: {
    width: '40%',
    marginLeft: '40%',
    right: 0,
    overflow: 'hidden',
    // height: '10vw',
    // border:'1px solid red',
    // textAlign:'right',
    fontFamily: 'Vollkorn',
    fontSize: "6vw",
    marginBottom: '5vh'
    // padding: '5%',
    // margin: '5%',
    // opacity: '0.5',
  },
  menuItem: {
    textDecoration: 'none',
    color: 'black',
    height: '100%',
    // border:'1px solid white'
  }
})
