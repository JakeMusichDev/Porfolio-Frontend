import airswap_name from '../assets/work/airswap/Airswap.svg'
import stockpile_name from '../assets/work/stockpile/Stockpile.png'
import artery_name from '../assets/work/artery/The-Artery.svg'

import airswap_desktop from "../assets/work/airswap/airswap-desktop.png"
import airswap_tablet from "../assets/work/airswap/airswap-tablet.png"
import airswap_mobile from "../assets/work/airswap/airswap-mobile.png"
import airswap_mov from '../assets/work/airswap/airswap_mov.mov'

import stockpile_index from '../assets/work/stockpile/stockpile-index.png'
// import stockpile_index from '../assets/work/stockpile-index.png'
// import stockpile_index from '../assets/work/stockpile-index.png'

import artery_desktop from '../assets/work/artery/artery-desktop.png'
import artery_mobile from '../assets/work/artery/artery_mobile.png'
import artery_tablet from '../assets/work/artery/artery_tablet.png'

//-------------------------------------------------------------
// Airswap 
//-------------------------------------------------------------

const _airswap_mobile = {
  type: 'dev',
  title: 'Airswap Website Mobile View',
  src: airswap_mobile,
}

const _airswap_tablet = {
  type: 'dev',
  title: 'Airswap Website Tablet View',
  src: airswap_tablet,
}

const _airswap_desktop = {
  type: 'dev',
  title: 'Airswap Website Desktop View',
  src: airswap_desktop,
}

//-------------------------------------------------------------
// Artery 
//-------------------------------------------------------------

const _artery_mobile = {
  type: 'dev',
  title: 'The-Artery Website Mobile View',
  src: artery_mobile,
}

const _artery_tablet = {
  type: 'dev',
  title: 'The-Artery Website Tablet View',
  src: artery_tablet,
}

const _artery_desktop = {
  type: 'dev',
  title: 'The-Artery Website Desktop View',
  src: artery_desktop,
}

//-------------------------------------------------------------
// Stockpile 
//-------------------------------------------------------------

// const _stockpile_large = {
//   type: 'dev',
//   title: 'Stockpile Index Page View',
//   src: artery_mobile,
// }

const _stockpile_index = {
  type: 'dev',
  title: 'Stockpile Index Page View',
  src: stockpile_index,
}





//-------------------------------------------------------------
// Projects 
//-------------------------------------------------------------

const airswap = {
  projectName: 'Airswap Redesign',
  description: "Redesigning the cryptocurrency Airswap's website prior to the release of their trading platform. We wrote the front-end with React, handling many of the animations with Animejs. Backend was powered by Strapi.js, a Node CMS framework.",
  role: '[ Front-end Developer ]',
  mainImage: airswap_desktop,
  content: [
    _airswap_desktop,
    _airswap_tablet,
    _airswap_mobile,
  ]
}

const stockpile = {
  projectName: 'Stockpile App',
  description: "Electron, Angular 2+ Desktop Application - Internal File Transfer Protocol",
  role: '[ Front-end Developer ]',
  mainImage: stockpile_index,
  content: [
    _stockpile_index
  ]
}

const artery = {
  projectName: 'The-Artery Website',
  description: "Building the portfolio for the creative studio The-Artery",
  role: '[ Front-end Developer ]',
  mainImage: artery_desktop,
  content: [
    _artery_desktop,
    _artery_tablet,
    _artery_mobile,
  ]
}

export const workProjectData = [
  airswap,
  artery,
  stockpile
]