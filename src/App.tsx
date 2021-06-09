import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './assets/styles/index.scss';
import { Home } from './components/views/Home';
import { MapCreator } from './components/views/MapCreator';
import { CharCreator } from './components/views/CharCreator';
import { Help } from './components/views/Help';
import { License } from './components/views/License';
import { Features } from './components/views/Features';
import { NotFound } from './components/views/NotFound';
import { MapCreationRules } from './components/views/MapCreationRules';
import { Notifications } from './components/partials/Notifications';
import { LoadRequestedMap } from './components/views/LoadRequestedMap';
import { LoadRequestedChar } from './components/views/LoadRequestedChar';


export const App: React.FC = () => {
  return (
    <>
      <Notifications />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path={'/map-creator'} component={MapCreator} />
          <Route path={'char-creator'} component={CharCreator} />
          <Route path={'help'} component={Help} />
          <Route path={'license'} component={License} />
          <Route path={'features'} component={Features} />
          <Route 
            path={'/map-creation-rules'}
            component={MapCreationRules} />
          <Route path={'/load-req-map'} component={LoadRequestedMap} />
          <Route path={'/load-req-char'} component={LoadRequestedChar} />
          <Route component={NotFound}/>
        </Switch>
      </Router>
    </>
  );
};
