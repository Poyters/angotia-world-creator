import React from 'react';
import ReactDOM from 'react-dom';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

//Import component
import NetOption from './NetOption';


configure({adapter: new Adapter()});

it('NetOption component renders without crashing', () => {
  const div: HTMLElement = document.createElement('div');
  ReactDOM.render(<NetOption />, div);
  ReactDOM.unmountComponentAtNode(div);
});