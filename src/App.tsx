import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Template } from './Template';
import { Home } from './components/views/Home';


export const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/:lang?" component={Template}>
          <Route exact path="/" component={Home} />
        </Route>
      </Switch>
    </Router>
  );
};
