import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from './store/reducers/rootReducer';
import * as serviceWorker from './serviceWorker';
import { App } from './App';
import { IStore } from './assets/interfaces/store';


export const store: IStore = createStore(rootReducer);

const runApp = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>, document.getElementById('root')
  );
};

window.addEventListener('DOMContentLoaded', runApp, false);

serviceWorker.unregister();
