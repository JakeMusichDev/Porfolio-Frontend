import drum from '../assets/photography/out/home_bk.jpeg'
import wish from '../assets/painting/thanks-balzac.png'
import cameraSelf from '../assets/photography/couchGaze/camera-self.jpg'
import airswap from '../assets/work/airswap/airswap-desktop.png'

import workSVG from '../assets/home/WORK.svg'
import aboutSVG from '../assets/home/ABOUT.svg'
import paintingSVG from '../assets/home/PAINTING.svg'
import photographySVG_lg from '../assets/home/PHOTOGRAPHY_lg.svg'


import aboutMenuSvg from '../assets/menu/about-full.svg'
import paintingMenuSvg from '../assets/menu/painting-full.svg'
import photoMenuSvg from '../assets/menu/photos-full.svg'
import workMenuSvg from '../assets/menu/work-full.svg'

export const items = [
  { name: 'about', svg:aboutSVG, src: cameraSelf, route: '/contact', menuSvg: aboutMenuSvg },
  { name: 'work', svg:workSVG, src: airswap, route: '/work', menuSvg: workMenuSvg },
  { name: 'painting', svg: paintingSVG, src: wish, route: '/painting', menuSvg: paintingMenuSvg },
  { name: 'photography', svg: photographySVG_lg, src: drum, route: '/photography', menuSvg: photoMenuSvg  },
]