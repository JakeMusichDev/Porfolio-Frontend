import photographySVG from '../assets/home/PHOTOGRAPHY.svg'
import photographySVG_lg from '../assets/home/PHOTOGRAPHY_lg.svg'
import cole from '../assets/photography/cole-1.jpg'

import paintingSVG from '../assets/home/PAINTING.svg'
import blue from '../assets/painting/blue-schmear.png'

import aboutSVG from '../assets/home/ABOUT.svg'
import aboutImage from '../assets/home/home_bk_2.jpeg'

import workSVG from '../assets/home/WORK.svg'
import airswap from '../assets/work/airswap/airswap-desktop.png'

export const items = [
  { name: 'work', svg:workSVG, src: airswap, route: '/work' },
  { name: 'contact', svg:aboutSVG, src: aboutImage, route: '/contact' },
  { name: 'painting', svg: paintingSVG, src: blue, route: '/painting' },
  { name: 'photography', svg: photographySVG_lg, src: cole, route: '/photography' },
]