import React from 'react';
import ReactDOM from 'react-dom';
import FullScreenOption from './FullScreenOption';


it('FullScreenOption component renders without crashing', () => {
  const div: HTMLElement = document.createElement('div');
  ReactDOM.render(<FullScreenOption />, div);
  ReactDOM.unmountComponentAtNode(div);
});
