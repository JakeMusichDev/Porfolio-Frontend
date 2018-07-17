import React from 'react';
import { Switch, Route } from 'react-router-dom';

// import Home from '../containers/Home';
// import Contact from '../containers/Contact'
import Photography from '../containers/Photography'
// import PaintingView from '../containers/PaintingView'
import Landing from '../containers/Landing'
import LandingContainer from '../components/Landing/LandingContainer'
import WorkContainer from '../containers/WorkContainer'

const pageArray = [
  {
    path: "/photography",
    component: Photography
  },
  {
    path: '/work',
    component: WorkContainer
  }
]

export const Routes = () => (
    <Switch>
      <Route exact path="/" component={LandingContainer} />
      {pageArray.map( data => <Route exact path={`${data.path}`} component={data.component} />)}
    </Switch>
)
