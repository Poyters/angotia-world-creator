import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


it('App component renders without crashing', ():void => {
  const div: HTMLElement = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
