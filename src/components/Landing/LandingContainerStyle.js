import { StyleSheet } from 'aphrodite/no-important'
import { breakPoints } from '../../utils/styles'

export const mainStyles = StyleSheet.create({
  landingContainerMain: {
    height: '100vh',
    width: '100vw',
    display: 'grid',
    background: 'rgb(15,15,15)',
    gridTemplateColumns: 'repeat(10, 10%)',
    gridTemplateRows: 'repeat(5, 20%)',
    color: 'white',
    fontSize: 10,
    fontFamily: 'Inconsolata'
  },
  gridPos: {
    gridRow: '5/6',
    gridColumn: '5/8',
    // border: '1px solid pink',
    [breakPoints.mobile]: {
      // gridColumn: '4/6',
    }
  }
})

export const textStyles = StyleSheet.create({
  artist: {
    gridRow: '1/2',
    gridColumn: '4/5',
    whiteSpace: 'nowrap'
  },
  dev: {
    gridRow: '1/2',
    whiteSpace: 'nowrap',
    gridColumn: '7/8',
  },
  name: {
    gridRow: '2/3',
    gridColumn: '10/11',
    webkitWritingMode: 'vertical-rl',
    writingMode: 'vertical-rl',
    fontSize: 14,
    whiteSpace: 'nowrap',
    opacity: 0.9,
  },
  portfolio: {
    gridRow: '5/6',
    whiteSpace: 'nowrap',
    gridColumn: '1/3',
    fontSize: 12,
    display: 'flex',
    flexDirection: 'column',
    opacity: 0.7,
    transition: '0.3s grid-column',
    [breakPoints.mobile]: {
      gridColumn: '2/3',
    },
    [breakPoints.mobile]: {
      gridColumn: '2/3',
    }
  }
})