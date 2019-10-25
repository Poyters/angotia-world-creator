import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './redux/reducers/rootReducer';

//Import styles
import './assets/styles/index.scss';

//Import views
import Home from './components/views/Home';
import Creator from './components/views/Creator';
import Help from './components/views/Help';
import NotFound from './components/views/NotFound';
import License from './components/views/License';


export const store = createStore(rootReducer);

export class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/creator" component={Creator} />
            <Route path="/help" component={Help} />
            <Route path="/license" component={License} />
            <Route component={NotFound}/>
          </Switch>
        </Router>
      </Provider>
    );
  }
}
