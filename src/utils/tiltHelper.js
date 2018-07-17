import VanillaTilt from 'vanilla-tilt'

const options  = {
  reverse: false,
  max: 50,
  perspective: 100,
  scale: 1.3,
  speed: 700,
  transition: true,
  axis: null,
  reset: true,
  easing: "cubic-bezier(.03,.98,.52,.99)",
}

const checkSize = () => {
  return window.innerWidth > 600;
};

export const attachTilt = (elementId) => {
  if( checkSize() ) {
    const elements = document.getElementById(elementId)
    if(!(elements instanceof Array)) {
      VanillaTilt.init(elements, options)
    } else {
      const tiltArray = [];
      for (var i = 0; i < elements.length; i++) {
        var elementToDestroy = elements[i];
        tiltArray.push(elementToDestroy)
        VanillaTilt.init(elements[i], options);
      }
      return tiltArray
    }
    return elements
  }
};

export const destroyTilt = (tiltArray) => {
  if(!(tiltArray instanceof Array)) {    
    tiltArray.vanillaTilt.destroy();
  } else {
    for (var i = 0; i < tiltArray.length; i++) {
      if(tiltArray[i].vanillaTilt) {
        tiltArray[i].vanillaTilt.destroy();
      }
    }
  }
};

