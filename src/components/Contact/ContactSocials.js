import React, { Component, PropTypes } from 'react';
import { StyleSheet, css } from 'aphrodite/no-important'
import {socialsIconsData} from '../../data/socialIconData'

export default class ContactSocials extends Component {
  render() {
    return (
      <div className={css(styles.socialContainer)}>

        <h3 className={css(styles.socialTagline)}>
          Connections are cool <br/>
          Find me at the links below
        </h3>
        <div className={css(styles.socialIconsWrapper)}>
          {socialsIconsData.map( (item, index) =>
            <div key={index} className={css(styles.itemWrapper)}>
              <a href={item.url} > 
                <img src={`${item.icon}`} className={css(styles.itemImg)} />
              </a>
            </div>
          )}
        </div>
      </div>
    )
  }


}

const styles = StyleSheet.create({
  socialContainer: {
    gridRow: '5/6',
    // gridColumn: '2/5',
    color:"white",
    fontFamily: ['Inconsolata', 'serif'],
    height:"auto",
    fontSize:12,
    display: 'block',
    // border:'1px solid green',
    marginBottom: '50vh'
    
  },
  socialTagline: {
    height: '100%',
    width: '100%',
    fontSize: 14,
  },
  socialIconsWrapper: {
    height: '100%',
    width: '100%',
    display:'flex',
    flexDirection: 'row',
  },
  itemWrapper: {
    margin:'20px',
  },
  itemImg: {
    height:'50px',
    width: '50px',
    margin: 'auto 0'
  }
})
