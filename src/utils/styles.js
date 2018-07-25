// export const padding = {
//   default: '66px 80px',
//   mobile: '50px 40px',
//   menu: '66px 80px 0 80px',
// }

export const easing = {
  fn: 'cubic-bezier(0.860, 0.000, 0.070, 1.000)',
}

const IPHONE_X_HEIGHT = '812px'
const IPHONE_X_WIDTH = '375px'

const LG_DESKTOP_SCREEN_MIN = '1700px'
const DESKTOP_SCREEN_MAX = '1699px'
const DESKTOP_SCREEN_MIN = '990px'
const TABLET_SCREEN_MAX = '989px'
const TABLET_SCREEN_MIN = '600px'
const MOBILE_SCREEN_MAX = '599px'
const TINY_MAX = '400px'

export const breakPoints = {
  screen: `@media only screen`,
  tiny: `@media only screen and (max-width:${TINY_MAX})`,
  mobile: `@media only screen and (max-width:${MOBILE_SCREEN_MAX})`,
  iphonex: `@media only screen and (device-width: ${IPHONE_X_WIDTH}) and (device-height: ${IPHONE_X_HEIGHT})`,
  tablet: `@media only screen and (min-width:${TABLET_SCREEN_MIN}) and (max-width: ${TABLET_SCREEN_MAX})`,
  desktop: `@media only screen and (min-width:${DESKTOP_SCREEN_MIN}) and (max-width: ${DESKTOP_SCREEN_MAX})`,
  desktopLg: `@media only screen} and (min-width:${LG_DESKTOP_SCREEN_MIN})`,
}
