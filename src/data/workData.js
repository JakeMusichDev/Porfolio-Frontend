import airswap_desktop from "../assets/work/airswap-desktop.png"
import airswap_tablet from "../assets/work/airswap-tablet.png"
import airswap_mobile from "../assets/work/airswap-mobile.png"
import airswap_name from '../assets/work/Airswap.svg'
import airswap_mov from '../assets/work/airswap_mov.mov'

import stockpile_name from '../assets/work/Stockpile.png'
import stockpile_index from '../assets/work/stockpile-index.png'

import artery_name from '../assets/work/The-Artery.svg'
import artery_desktop from '../assets/work/artery-desktop.png'

const airswap = {
  projectName: 'Airswap Redesign',
  description: "Redesigning the cryptocurrency Airswap's website prior to the release of their trading platform.",
  role: '[ Front-end Developer ]',
  mainImage: airswap_desktop,
  content: [
    airswap_name,
    airswap_desktop,
    airswap_tablet,
    airswap_mobile,
  ]
  // content: {
  //   nameSvg: airswap_name,
  //   src: airswap_desktop,
  //   tablet: airswap_tablet,
  //   mobile: airswap_mobile,
  // }
}

const stockpile = {
  projectName: 'Stockpile App',
  description: "Electron, Angular 2+ Desktop Application - Internal File Transfer Protocol",
  role: '[ Front-end Developer ]',
  mainImage: stockpile_index,
  content: [
    airswap_name,
    airswap_desktop,
    airswap_tablet,
    airswap_mobile,
  ]  // content: {
  //   nameSvg: stockpile_name,
  //   src: stockpile_index,
  //   tablet: airswap_tablet,
  //   mobile: airswap_mobile
  // }
}

const artery = {
  projectName: 'The-Artery Website',
  description: "Building the portfolio for the creative studio The-Artery",
  role: '[ Front-end Developer ]',
  mainImage: artery_desktop,
  content: [
    airswap_name,
    airswap_desktop,
    airswap_tablet,
    airswap_mobile,
  ]  // content: {
  //   nameSvg: artery_name,
  //   src: artery_desktop,
  //   // tablet: airswap_tablet,
  //   // mobile: airswap_mobile
  // }
}

export const workProjectData = [
  airswap,
  artery,
  stockpile
]