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
//     src: airswap_desktop,
//     tablet: airswap_tablet,
//     mobile: airswap_mobile,
//   }
// }

// const stockpile = {
//   projectName: 'Stockpile FTP',
//   description: "Built an internal FTP system with with Angular and Electron",
//   content: {
//     nameSvg: stockpile_name,
//     src: stockpile_index,
//     tablet: airswap_tablet,
//     mobile: airswap_mobile
//   }
// }

// const artery = {
//   projectName: 'The-Artery Website',
//   description: "Building the portfolio for the creative studio The-Artery",
//   content: {
//     nameSvg: artery_name,
//     src: artery_desktop,
//     // tablet: airswap_tablet,
//     // mobile: airswap_mobile
//   }
// }

// export const workProjectData = [
//   airswap,
//   artery,
//   stockpile
// ]

import displacementFilterImg from '../assets/home/displacementFilterHome.jpeg'
import bk_2 from '../assets/home/home_bk_2.jpeg'
import bk_1 from '../assets/home/home_bk.jpeg'
// import 16740033 from '/assets/photography/16740033.jpg'
import alec from '../assets/photography/alec.jpg'
import cole1 from '../assets/photography/cole-1.jpg'
import cole2 from '../assets/photography/cole-2.jpg'
import dash from '../assets/photography/dash.jpg'
import drum from '../assets/photography/drum.JPG'
import highwayBurnWood from '../assets/photography/highway-burn-wood.JPG'
import jenny from '../assets/photography/jenny.JPG'
import liamBass from '../assets/photography/liam-bass.JPG'
import lucas from '../assets/photography/lucas.jpg'
import pioneer1 from '../assets/photography/pioneer-1.JPG'
import pioneer2 from '../assets/photography/pioneer-2.JPG'
import snowRailroad from '../assets/photography/snow-railroad.JPG'
import troy from '../assets/photography/troy.jpg'

const photoPath = '../assets/photography/'

const _photo1 = {
  type: 'photo',
  title: 'Iceland #12',
  src: troy,
  css_class: '',
  key: '3asdl',
}

const _photo2 = {
  type: 'photo',
  title: 'Iceland #10',
  src: jenny,
  css_class: '',
  key: 'd',
}

const _alec = {
  type: 'photo',
  title: 'Iceland #10',
  src: alec,
  css_class: '',
  key: 'd',
}

const _cole1 = {
  type: 'photo',
  title: 'Iceland #10',
  src: jenny,
  css_class: '',
  key: 'd',
}

const _cole2 = {
  type: 'photo',
  title: 'Iceland #10',
  src: cole2,
  css_class: '',
  key: 'd',
}


const highEater = {
  projectName: 'High Eaters',
  mainImage: liamBass,
  content: [_photo1, _photo2, _alec, _photo2, _photo2, _cole1],
}

const steez = {
  projectName: 'Brooklyn Steez',
  mainImage: snowRailroad,
  content: [
    _alec,
    _photo2,
    _photo2,
    _cole2,
    _photo1
  ],
}

const freshNet = {
  projectName: "Zoro Depth Fres",
  mainImage: pioneer1,
  content: [
    _photo1,
    _photo2,
    _photo1,
    _photo2,
  ],
}
const el = {
  projectName: 'El Sonata',
  mainImage: drum,
  content: [
    _cole1,
    _photo2,
    _photo1,
    _photo2,
  ],
}
const pruse = {
  projectName: 'Beautiful Pruse',
  mainImage: bk_2,
  content: [
    _cole2,
    _photo2,
    _photo1,
    _photo2,
  ],
}

export const photographyGridData = [
  pruse,
  steez,
  highEater,
  pruse,
  freshNet,
  highEater,
  el,
  highEater,
  steez,
  freshNet
]