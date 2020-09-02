import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from './store/reducers/rootReducer';
import * as serviceWorker from './serviceWorker';
import { App } from './App';
import { IStore } from './assets/interfaces/store.interface';
import { ApolloProvider } from '@apollo/react-hooks';
import { client } from './api/apiInit';


export const store: IStore = createStore(rootReducer);

const runApp = () => {
  ReactDOM.render(
    <Provider store={store}>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </Provider>, document.getElementById('root')
  );
};

window.addEventListener('DOMContentLoaded', runApp, false);

serviceWorker.unregister();
