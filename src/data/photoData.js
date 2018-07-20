// Couch Gaze
import alec from '../assets/photography/couchGaze/alec.jpg'
import cameraSelf from '../assets/photography/couchGaze/camera-self.jpg'
import cole1 from '../assets/photography/couchGaze/cole-1.jpg'
import dash from '../assets/photography/couchGaze/dash.jpg'
import drum from '../assets/photography/couchGaze/drum.JPG'
import lucas from '../assets/photography/couchGaze/lucas.jpg'

// Out
import burnWood from '../assets/photography/out/highway-burn-wood.JPG'
import noguch1 from '../assets/photography/out/noguchi_1.JPG'
import noguch2 from '../assets/photography/out/pioneer-1.JPG'
import pioneer1 from '../assets/photography/out/pioneer-2.JPG'
import snowRailroad from '../assets/photography/out/snow-railroad.JPG'

// The Unsentimental 
import imaan from '../assets/photography/theUnsentimental/16740033.jpg'
import cole2 from '../assets/photography/theUnsentimental/cole-2.jpg'
import jen from '../assets/photography/theUnsentimental/jenny.JPG'
import liambass from '../assets/photography/theUnsentimental/liam-bass.JPG'
import troy from '../assets/photography/theUnsentimental/troy.jpg'

//-----------------------------------------------------------------------------------
// Projects 
//-----------------------------------------------------------------------------------

const couchGaze = {
  projectName: 'Couch Gaze',
  type: 'photo',
  mainImage: cole1,
  description: 'Childhood friends all grown up, an old apartment, a little voyeurism',
  content: [
    {
      title: 'A-Bear',
      src: alec,
      key: '3asdl',
    },
    {
      title: 'Selfie #2',
      src: cameraSelf,
      key: 'sdasdf',
    },
    {
      title: 'Sleeper #1',
      src: cole1,
      key: 'fwe23v',
    },
    {
      title: 'Big Dash',
      src: dash,
      key: 'bku80',
    },
    {
      title: 'Ref',
      src: drum,
      key: '789jg',
    },
    {
      title: 'Lucas, MD.',
      src: lucas,
      key: 'ghj34',
    },
  ],
}

const out = {
  projectName: 'Out There Somewhere',
  description: 'A smattering of street photos and interesting places. Why limit it.',
  type: 'photo',
  mainImage: snowRailroad,
  content: [
    {
      title: 'Katonah Burnwood',
      src: burnWood,
      key: '3asdl',
    },
    {
      title: 'Noguchi #1',
      src: noguch1,
      key: 'sdasdf',
    },
    {
      title: 'Noguchi #2',
      src: noguch2,
      key: 'fwe23v',
    },
    {
      title: 'Pioneer Works',
      src: pioneer1,
      key: 'bku80',
    },
    {
      title: 'Bushwick in Snow',
      src: snowRailroad,
      key: '789jg',
    },
  ],
}

const sentiment = {
  projectName: 'The Unsentimental',
  description: 'Portrait style nonsense.',
  type: 'photo',
  mainImage: jen,
  content: [
    {
      title: 'I',
      src: imaan,
      key: '3asdl',
    },
    {
      title: "C",
      src: cole2,
      key: 'sdasdf',
    },
    {
      title: 'J',
      src: jen,
      key: 'fwe23v',
    },
    {
      title: 'L',
      src: liambass,
      key: 'bku80',
    },
    {
      title: 'T',
      src: troy,
      key: '789jg',
    },
  ],
}

export const photographyGridData = [
  out, 
  couchGaze,
  sentiment
]