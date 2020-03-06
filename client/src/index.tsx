import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './redux/reducers/rootReducer';
import * as serviceWorker from './serviceWorker';

//Import other components
import App from './App';

export const store = createStore(rootReducer);

const runApp = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>, document.getElementById('root')
  );
};

window.addEventListener('DOMContentLoaded', runApp, false);

serviceWorker.unregister();
