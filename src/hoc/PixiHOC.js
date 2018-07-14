import React, { Component } from 'react'
import _ from 'underscore'

export const wrapPixiComponent = (WrappedComponent, list ) => {
  return class extends Component {
    constructor(props) {
      super(props)  
  
      this.state = {
        pixiInitComplete: false
      }
  
      this.app = PIXI.Application
      this.canvasAnchor = HTMLDivElement
      this.filterSprite = PIXI.filter
      this.count = 0
      this._animateCanvas = this.animateCanvas.bind(this)
    }
  
    componentWillReceiveProps(nextProps, nextState) {
      if(this.state.pixiInitComplete) {
        console.log(nextProps);      
        this.nextBackgroundImage(nextProps)
      }
    }

    componentDidMount() {

    }
  
    componentWillUnmount() {
      
    }
  
    render() {
      const { currentItem, direction } = this.state
  
      return <WrappedComponent data={currentItem} {...this.props} />
    }
  
    //----------------------------------------------------------------
    //----------------------------------------------------------------
    //----------------------------------------------------------------
    //----------------------------------------------------------------

    initPixi = () => {
      if (!PIXI.loader.resources['background-2']) {
        this.loaderConfig()
      } else {
        this.buildApp()
      }
    }
  
    loaderConfig = () => {
      PIXI.loader
        .add('background-0', `${}`)
        .load(this.buildApp);
    }
  
  
    buildApp = () => {
      const anchorBounds = this.canvasAnchor.getBoundingClientRect()
      this.app = new PIXI.autoDetectRenderer({
        width:  anchorBounds.width,
        height: anchorBounds.height,
        antialias: true,
        transparent: true,
        resolution: 1,
        autoResize: true,
        interactive:true,
      })
  
      this.app.renderer.resize(anchorBounds.height, anchorBounds.width)
      this.canvasAnchor.appendChild(this.app.view)
  
      this.attachFilteredImage()
    }
  
    attachFilteredImage = () => {
      // Create stage
      this.stageContainer = new PIXI.Container()
      // this.app.render(this.stageContainer)
      // this.app.stage.interactive = true
  
      // Create Image itself
      const imageSprite = new PIXI.Sprite(PIXI.loader.resources['background-0'].texture)
      imageSprite.autoFit = true
      imageSprite.interactive = true
      imageSprite.scale.set(0.3, 0.3)
      imageSprite.anchor.set(0.2,0.2)
      
      this.app.on('click', (event) => {
        this.changeAlpha(imageSprite)
      })
  
      // Create Filter sprite 
      // const filterSprite = new PIXI.Sprite(PIXI.loader.resources['filter'].texture)
      const filterSprite = PIXI.Sprite.fromImage(`${displacementFilterImg}`);
      // Create filter
      const displacementFilter = new PIXI.filters.DisplacementFilter(filterSprite)
      displacementFilter.autoFit = true
  
      filterSprite.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;
      filterSprite.texture.baseTexture.wrapMode
      filterSprite.scale.x = 0.6;
      filterSprite.scale.y = 0.6;
  
      // Add sprites and filter to container
      this.stageContainer.addChild(filterSprite)
  
      this.stageContainer.addChild(imageSprite)
      this.stageContainer.filters = [displacementFilter]
      this.app.render(this.stageContainer)
      // console.log(this.app);
      // let interactionManager = PIXI.interaction.InteractionManager(this.app);
      
      this.setState({pixiInitComplete:true}, () => this.animateCanvas(filterSprite) )
    }
  
    animateCanvas = (filterSprite) => {
      let count = 0
      let ticker = new PIXI.ticker.Ticker()
      ticker.add(this.update, this);
      ticker.start();
      ticker.add(function(time) {
        filterSprite.x = count*30
        filterSprite.y = count*30
        count += 0.05
      })
      // this.app.ticker.add((delta) => {
      //   filterSprite.x = count*30
      //   filterSprite.y = count*30
      //   count += 0.05
      // })
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
      const {activePixiImage} = nextProps
      const imageSprite = new PIXI.Sprite.fromImage(`${activePixiImage.src}`);
  
      imageSprite.autoFit = true
      // imageSprite.scale.set(1, 1)
      imageSprite.anchor.set(0.2,0.2)
      this.stageContainer.addChild(imageSprite)
    }
  

  }
}

