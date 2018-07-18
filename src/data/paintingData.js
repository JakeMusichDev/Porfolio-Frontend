// import airswap_desktop from "../assets/work/airswap-desktop.png"
// import airswap_tablet from "../assets/work/airswap-tablet.png"
// import airswap_mobile from "../assets/work/airswap-mobile.png"
// import airswap_name from '../assets/work/Airswap.svg'
// import airswap_mov from '../assets/work/airswap_mov.mov'

// import stockpile_name from '../assets/work/Stockpile.png'
// import stockpile_index from '../assets/work/stockpile-index.png'

// import artery_name from '../assets/work/The-Artery.svg'
// import artery_desktop from '../assets/work/artery-desktop.png'

// const airswap = {
//   projectName: 'Airswap Redesign',
//   description: "Redesigning the cryptocurrency Airswap's website prior to the release of their trading platform.",
//   movie: airswap_mov,
//   content: {
//     nameSvg: airswap_name,
//     mainImage: airswap_desktop,
//     tablet: airswap_tablet,
//     mobile: airswap_mobile,
//   }
// }

// const stockpile = {
//   projectName: 'Stockpile FTP',
//   description: "Built an internal FTP system with with Angular and Electron",
//   content: {
//     nameSvg: stockpile_name,
//     mainImage: stockpile_index,
//     tablet: airswap_tablet,
//     mobile: airswap_mobile
//   }
// }

// const artery = {
//   projectName: 'The-Artery Website',
//   description: "Building the portfolio for the creative studio The-Artery",
//   content: {
//     nameSvg: artery_name,
//     mainImage: artery_desktop,
//     // tablet: airswap_tablet,
//     // mobile: airswap_mobile
//   }
// }

// export const workProjectData = [
//   airswap,
//   artery,
//   stockpile
// ]

import delver from '../assets/painting/delver.png'
import blueSchmear from '../assets/painting/blue-schmear.png'
import theFulcrum from '../assets/painting/the-fulcrum.png'
import windWhisper from '../assets/painting/a-wind-a-whisper.png'
import wispWhimper from '../assets/painting/a-wisp-a-whimper.png'
import mothersWish from '../assets/painting/mothers-wish.png'


//------------------------------------------------------------------------------------
const _blueSchmear = {
  type: 'painting',
  projectName: 'Blue Schmear',
  mainImage: blueSchmear,
  key: 'blue-schmear',
  content: [
    blueSchmear
  ]
}


const _delver = {
  type: 'painting',
  projectName: 'Delver',
  mainImage: delver,  
  key: 'delver',
  description: 'Oil on Canvas, 2016',
  content: [
    blueSchmear
  ]
}


const _theFulcrum = {
  type: 'painting',
  projectName: 'The Fulcrum',
  mainImage: theFulcrum,  
  key: 'the-fulcrum',
  description: 'Oil on Canvas, 2016',
  content: [
    blueSchmear
  ]
}

const _windWhisper = {
  type: 'painting',
  projectName: 'a wind a whisper',
  mainImage: windWhisper,  
  key: 'a-wind-a-whisper',
  description: 'Oil on Canvas, 2016',
  content: [
    blueSchmear
  ]
}


const _wispWhimper = {
  type: 'painting',
  projectName: 'a wisp a whimper',
  mainImage: wispWhimper,  
  key: 'a-wisp-a-whimper',
  description: 'Oil on Canvas, 2016',
  content: [
    blueSchmear
  ]
}
const _mothersWish = {
  type: 'painting',
  projectName: "a mother's wish",
  mainImage: mothersWish,  
  key: 'a-mothers-wish',
  description: 'Oil on Canvas, 2016',
  content: [
    blueSchmear
  ]
}

// const steez = {
//   projectName: 'Brooklyn Steez',
//   mainImage: snowRailroad,
//   content: [
//     _alec,
//     _photo2,
//     _photo2,
//     _cole2,
//     _photo1
//   ],
// }


export const paintingData = [
  _blueSchmear,
  _delver,
  _theFulcrum,
  _windWhisper,
  _wispWhimper,
  _mothersWish,
]