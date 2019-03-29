import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './redux/reducers/rootReducer';

//Import styles
import './assets/styles/index.scss';

//Import views
import Home from './components/views/Home';
import Creator from './components/views/Creator';


export const store = createStore(rootReducer);

export class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <React.Fragment>
            <Route exact path="/" component={Home} />
            <Route path="/creator" component={Creator} />
          </React.Fragment>
        </Router>
      </Provider>
    );
  }
}
