import React from 'react'
import mediumIcon from '../assets/about/social-icons/medium.svg'
import githubIcon from '../assets/about/social-icons/github.svg'
import linkedinIcon from '../assets/about/social-icons/linkedin.svg'

import angularIcon from '../assets/about/tech-icons/angular.svg'
import css3Icon from '../assets/about/tech-icons/css3.svg'
import gitIcon from '../assets/about/tech-icons/git.svg'
import herokuIcon from '../assets/about/tech-icons/heroku.svg'
import html5Icon from '../assets/about/tech-icons/html5.svg'
import javascriptIcon from '../assets/about/tech-icons/javascript.svg'
import mongodbIcon from '../assets/about/tech-icons/mongodb.svg'
import mysqlIcon from '../assets/about/tech-icons/mysql.svg'
import nodeIcon from '../assets/about/tech-icons/nodejs.svg'
import npmIcon from '../assets/about/tech-icons/npm.svg'
import pythonIcon from '../assets/about/tech-icons/python.svg'
import railsIcon from '../assets/about/tech-icons/rails.svg'
import piIcon from '../assets/about/tech-icons/raspberrypi.svg'
import reactIcon from '../assets/about/tech-icons/react.svg'
import sassIcon from '../assets/about/tech-icons/sass.svg'
import vscodeIcon from '../assets/about/tech-icons/visualstudiocode.svg'
import vueIcon from '../assets/about/tech-icons/vuejs.svg'


//------------------------------------------------------
// Copy  
//------------------------------------------------------

export const contactCopy = {
  hello: 'Hello',
  intro: "I'm Jake",
  bioIntro: "I'm a Front-end Developer currently working in Brooklyn, New York. I specialize in React, Angular, animation, and interaction design. I feel in love with coding while completing my thesis and eventually decided to make a career out of it - wild, I know. I graduated from the Flatiron School in New York City in 2017 and have been developing professionally ever since.",
  bioBody: "I feel in love with code in college over the course of my sculpture and new media art thesis project.",
  artistBio: 'I studied sculpture in college, but after completing my degree and moving to New York, I confronted the difficulty of finding space for large tools, materials, and the general whirlwind of mess that you find in a sculpture studio. Frustrated, I picked up a set of paint brushes and slapped a canvas on the wall. Three years later I feel ok calling myself a painter.'
}

//------------------------------------------------------
// Social Media Icons 
//------------------------------------------------------

const medium = {
  icon: mediumIcon,
  url: 'https://medium.com/@makejusich',
  name: 'Medium'
}

const github = {
  icon: githubIcon,
  url: 'https://github.com/RazzleRazzle/',
  name: 'Github'
}

const linkedIn = {
  icon: linkedinIcon,
  url: 'https://www.linkedin.com/in/jake-musich-b6b576b3/',
  name: 'LinkedIn'
}

export const socialsData = [
  medium,
  github,
  linkedIn
]

//------------------------------------------------------
// Technology Icons
//------------------------------------------------------

const angular  = {
  icon: angularIcon,
  name: "Angular 2+"
}

const css3 = {
  icon: css3Icon,
  name: "CSS3"
}
const git = {
  icon: gitIcon,
  name: "Git"
}
const heroku = {
  icon: herokuIcon,
  name: "Heroku"
}
const html5 = {
  icon: html5Icon,
  name: "HMTL5"
}
const javascript = {
  icon: javascriptIcon,
  name: "Javascript (ES6)"
}
const mongodb = {
  icon: mongodbIcon,
  name: "MongoDB"
}
const mysql = {
  icon: mysqlIcon,
  name: 'SQL'
}
const node = {
  icon: nodeIcon,
  name: 'Node'
}
const npm = {
  icon: npmIcon,
  name: "NPM"
}
const python = {
  icon: pythonIcon,
  name: 'Python'
}

const rails = {
  icon: railsIcon,
  name: 'Ruby-on-Rails'
}
const pi = {
  icon: python,
  name: 'Python'
}
const react = {
  icon: reactIcon,
  name: "React"
}

const sass = {
  icon: sassIcon,
  name: 'Sass'
}
const vscode = {
  icon: vscodeIcon,
  name: "VSCode"
}
const vue = {
  icon: vueIcon,
  name: "Vue"
}


export const skillsData = [
  angular,
  css3,
  git,
  heroku,
  html5,
  javascript,
  mongodb,
  mysql,
  node,
  npm,
  // python,
  rails,
  // pi,
  react,
  sass,
  vscode,
  vue
]
