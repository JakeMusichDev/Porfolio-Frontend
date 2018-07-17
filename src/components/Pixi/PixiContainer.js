import React, { Component } from 'react'
import _ from 'underscore'
import * as PIXI from 'pixi.js'
import { StyleSheet, css } from 'aphrodite/no-important'
import filter from "../../assets/home/displacementFilterHome.jpeg"

export default class PixiContainer extends Component {
  constructor(props) {
    super(props)  

    this.state = { pixiInitComplete: false }

    this.app = PIXI.Application
    this.canvasAnchor = HTMLDivElement
    this.filterSprite = PIXI.filter
    this.count = 0
    this._animateCanvas = this.animateCanvas.bind(this)
  }

  componentDidMount() {
    setTimeout(this.buildApp, 10)
    window.addEventListener('resize', this.resize)
    // this.buildApp()
  }

  componentWillReceiveProps(nextProps, nextState) {
    if(this.state.pixiInitComplete) {
      this.nextBackgroundImage(nextProps)
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize)
  }

  render() {
    return (
      <div className={css(styles.canvasContainer)} ref={refEl => {this.canvasAnchor = refEl} }></div>
    )
  }


  buildApp = () => {
    // const anchorBounds = this.canvasAnchor.getBoundingClientRect()
    const anchorBounds = this.canvasAnchor.getBoundingClientRect()
  
    this.app = new PIXI.autoDetectRenderer({
      width:  anchorBounds.width,
      height: anchorBounds.height,
      antialias: true, 
      transparent: true,
      resolution: 1,
      // autoResize: true,
      // interactive:true,
    })
    
    this.canvasAnchor.appendChild(this.app.view)
    this.attachFilteredImage()
  }

  attachFilteredImage = () => {
    // Create stage
    this.stageContainer = new PIXI.Container()

    // Create Image itself
    const imageSprite = PIXI.Sprite.fromImage(`../../${this.props.image}`);
    
    imageSprite.autoFit = true;
    imageSprite.interactive = true
    imageSprite.scale.set(0.3, 0.3)
    // imageSprite.anchor.set(0.2,0.2)
    
    // Create Filter sprite 
    // const filterSprite = new PIXI.Sprite(PIXI.loader.resources['filter'].texture)
    const filterSprite = PIXI.Sprite.fromImage(`${filter}`);
    filterSprite.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;
    filterSprite.texture.baseTexture.wrapMode
    filterSprite.scale.x = 0.6;
    filterSprite.scale.y = 0.6;
    

    const displacementFilter = new PIXI.filters.DisplacementFilter(filterSprite)
    displacementFilter.autoFit = true

    // Add sprites and filter to container
    this.stageContainer.addChild(filterSprite)
    this.stageContainer.addChild(imageSprite)
    this.stageContainer.filters = [displacementFilter]

    this.app.render(this.stageContainer)
    
    this.setState({pixiInitComplete:true}, () => this.animateCanvas(filterSprite) )

  }

  animateCanvas = (filterSprite) => {
    let count = 0
    this.ticker = new PIXI.ticker.Ticker()
    this.ticker.add(this.update, this);
    this.ticker.start();
    this.ticker.add(function(time) {
      filterSprite.x = count*30
      filterSprite.y = count*30
      count += 0.05
    })
  }

  update() {
    this.app.render(this.stageContainer);
  }

  changeAlpha = (sprite) => {
    this.app.ticker.add( delta => {
      if(sprite.alpha <= 1) {
        sprite.alpha -= .01;
      }
    })
  }

  
  nextBackgroundImage = (nextProps) => {
    let i = this.stageContainer.getChildAt(1)
    let p = 0
    console.log(i);
    const fadeOutAlpha = () => i.alpha > 0? i.alpha =- 0.01 : cancelAnimationFrame(frame)
    const frame = requestAnimationFrame(fadeOutAlpha)
    const anchorBounds = this.canvasAnchor.getBoundingClientRect()
    
    
    const {activePixiImage} = nextProps
    const imageSprite = new PIXI.Sprite.fromImage(`${this.props.image}`);
    
    imageSprite.autoFit = true
    imageSprite.height = anchorBounds.height
    imageSprite.width = anchorBounds.width
    // imageSprite.scale.set(0.3, 0.3)
    // imageSprite.anchor.set(0.2,0.2)

    this.stageContainer.addChild(imageSprite)
  }

  resize = () => {
    const anchorBounds = this.canvasAnchor.getBoundingClientRect()
    this.app.resize(anchorBounds.height, anchorBounds.width)
  }
}

const styles = StyleSheet.create({
  canvasContainer: {
    height: '100%',
    width: '100%'
  }
})




