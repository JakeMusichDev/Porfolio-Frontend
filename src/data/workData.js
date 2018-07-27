import airswap_name from '../assets/work/airswap/Airswap.svg'
import stockpile_name from '../assets/work/stockpile/Stockpile.png'
import artery_name from '../assets/work/artery/The-Artery.svg'

import airswap_desktop from "../assets/work/airswap/airswap-desktop.png"
import airswap_tablet from "../assets/work/airswap/airswap-tablet.png"
import airswap_mobile from "../assets/work/airswap/airswap-mobile.png"
import airswap_mov from '../assets/work/airswap/airswap_mov.mov'

import stockpile_1 from '../assets/work/stockpile/stockpile_1.png'
import stockpile_2 from '../assets/work/stockpile/stockpile_2.png'
import stockpile_3 from '../assets/work/stockpile/stockpile_3.png'
import stockpile_4 from '../assets/work/stockpile/stockpile_4.png'
import stockpile_5 from '../assets/work/stockpile/stockpile_5.png'
import stockpile_6 from '../assets/work/stockpile/stockpile_6.png'
import stockpile_7 from '../assets/work/stockpile/stockpile_7.png'
import stockpile_mov from '../assets/work/stockpile/stockpile_mov.mov'

import artery_desktop from '../assets/work/artery/artery-desktop.png'
import artery_mobile from '../assets/work/artery/artery_mobile.png'
import artery_tablet from '../assets/work/artery/artery_tablet.png'

//-------------------------------------------------------------
// Airswap 
//-------------------------------------------------------------

const _airswap_mobile = {
  type: 'photo',
  title: 'Airswap Website Mobile View',
  src: airswap_mobile,
}

const _airswap_tablet = {
  type: 'photo',
  title: 'Airswap Website Tablet View',
  src: airswap_tablet,
}

const _airswap_desktop = {
  type: 'photo',
  title: 'Airswap Website Desktop View',
  src: airswap_desktop,
}

//-------------------------------------------------------------
// Artery 
//-------------------------------------------------------------

const _artery_mobile = {
  type: 'photo',
  title: 'The-Artery Website Mobile View',
  src: artery_mobile,
}

const _artery_tablet = {
  type: 'photo',
  title: 'The-Artery Website Tablet View',
  src: artery_tablet,
}

const _artery_desktop = {
  type: 'photo',
  title: 'The-Artery Website Desktop View',
  src: artery_desktop,
}

//-------------------------------------------------------------
// Stockpile 
//-------------------------------------------------------------
const _stockpile_1 = {
  type: 'photo',
  title: 'Stockpile Index Page View',
  src: stockpile_1,
}

const _stockpile_2 = {
  type: 'photo',
  title: 'Compression Menu',
  src: stockpile_2,
}

const _stockpile_3 = {
  type: 'photo',
  title: 'New Folder View',
  src: stockpile_3,
}

const _stockpile_4 = {
  type: 'photo',
  title: 'Adding users',
  src: stockpile_4,
}

const _stockpile_5 = {
  type: 'photo',
  title: 'New Project View',
  src: stockpile_5,
}

const _stockpile_6 = {
  type: 'photo',
  title: 'Stockpile Index Page View',
  src: stockpile_6,
}

const _stockpile_7 = {
  type: 'photo',
  title: 'Delete Project View',
  src: stockpile_7,
}

const _stockpile_mov = {
  type: 'movie',
  title: 'Stockpile Index Page View',
  src: stockpile_mov,
}






//-------------------------------------------------------------
// Projects 
//-------------------------------------------------------------

const airswap = {
  projectName: 'Airswap Redesign',
  description: "Redesigning the cryptocurrency Airswap's website prior to the release of their trading platform. We wrote the front-end with React, handling many of the animations with Animejs. Backend was powered by Strapi.js, a Node CMS framework.",
  role: '[ Front-end Developer ]',
  mainImage: airswap_desktop,
  type: 'dev',
  content: [
    _airswap_desktop,
    _airswap_tablet,
    _airswap_mobile,
  ]
}

const stockpile = {
  projectName: 'Stockpile App',
  description: "Electron, Angular 2+ Desktop Application Internal File Transfer Protocol",
  role: '[ Front-end Developer ]',
  mainImage: stockpile_1,
  type: 'dev',
  content: [
    _stockpile_mov,
    _stockpile_1,
    _stockpile_2,
    _stockpile_3,
    _stockpile_4,
    _stockpile_5,
    // _stockpile_6,
    _stockpile_7,
  ]
}

const artery = {
  projectName: 'The-Artery Website',
  description: "Building the portfolio for the creative studio The-Artery",
  role: '[ Front-end Developer ]',
  mainImage: artery_desktop,
  type: 'dev',
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