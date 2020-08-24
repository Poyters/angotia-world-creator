import React from 'react';
import { render } from '@testing-library/react';
import { App } from './App';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { mockInitStore } from './assets/mocks/store';


describe('App component', () => {
  const initialState = mockInitStore;
  const mockStore = configureStore();
  let store;

  it('Renders without crashing', () => {
    store = mockStore(initialState);
    render(<Provider store={store}><App /></Provider>);
  });
});