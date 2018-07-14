import React from 'react';
import { Switch, Route } from 'react-router-dom';

// import Home from '../containers/Home';
// import Contact from '../containers/Contact'
import Photography from '../containers/Photography'
// import PaintingView from '../containers/PaintingView'
import Landing from '../containers/Landing'

const pageArray = [
  {
    path: "/photography",
    component: Photography
  }
]

export const Routes = () => (
    <Switch>
      <Route exact path="/" component={Landing} />
      {pageArray.map( data => <Route exact path={`${data.path}`} component={data.component} />)}
    </Switch>
)
