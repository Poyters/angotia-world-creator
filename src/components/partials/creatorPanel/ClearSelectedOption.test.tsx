import React from 'react';
import ReactDOM from 'react-dom';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

//Import component
import ClearSelectedOption from './ClearSelectedOption';


configure({adapter: new Adapter()});

it('ClearSelectedOption component renders without crashing', (): void => {
  const div: HTMLElement = document.createElement('div');
  ReactDOM.render(<ClearSelectedOption />, div);
  ReactDOM.unmountComponentAtNode(div);
});