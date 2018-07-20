import photographySVG from '../assets/home/PHOTOGRAPHY.svg'
import photographySVG_lg from '../assets/home/PHOTOGRAPHY_lg.svg'
import cole from '../assets/photography/cole-1.jpg'

import paintingSVG from '../assets/home/PAINTING.svg'
import blue from '../assets/painting/blue-schmear.png'

import aboutSVG from '../assets/home/ABOUT.svg'
import aboutImage from '../assets/home/home_bk_2.jpeg'

import workSVG from '../assets/home/WORK.svg'
import airswap from '../assets/work/airswap/airswap-desktop.png'

import aboutMenuSvg from '../assets/menu/about-svg.svg'
import paintingMenuSvg from '../assets/menu/painting-svg.svg'
import photoMenuSvg from '../assets/menu/photo-svg.svg'
import workMenuSvg from '../assets/menu/work-svg.svg'

export const items = [
  { name: 'work', svg:workSVG, src: airswap, route: '/work', menuSvg: workMenuSvg },
  { name: 'about', svg:aboutSVG, src: aboutImage, route: '/contact', menuSvg: aboutMenuSvg },
  { name: 'painting', svg: paintingSVG, src: blue, route: '/painting', menuSvg: paintingMenuSvg },
  { name: 'photography', svg: photographySVG_lg, src: cole, route: '/photography', menuSvg: photoMenuSvg  },
]