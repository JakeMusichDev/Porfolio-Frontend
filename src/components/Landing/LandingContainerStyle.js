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
    [breakPoints.mobile]: {
      // gridColumn: '4/6',
    }
  }
})

export const textStyles = StyleSheet.create({
  bio: {
    gridRow: '4/5',
    gridColumn: '4',
    whiteSpace: 'nowrap',
    fontFamily: 'karla',
    zIndex: '2',
    fontSize: 14,
    [breakPoints.mobile]: {
    fontSize: 12,
    gridColumn: '4',
    },
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
      fontSize: 11,
      gridColumn: '2/3',
    }
  },
  year: {
    gridRow: '5/6',
    whiteSpace: 'nowrap',
    gridColumn: '9/10',
    fontSize: 12,
    display: 'flex',
    flexDirection: 'column',
    opacity: 0.7,
    transition: '0.3s grid-column',
    [breakPoints.mobile]: {
      fontSize: 11,
      gridColumn: '9',
    }
  }
})