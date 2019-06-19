import React from 'react';
import ReactDOM from 'react-dom';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

//Import component
import SelectOption from './SelectOption';


configure({adapter: new Adapter()});

it('SelectOption component renders without crashing', (): void => {
  const div: HTMLElement = document.createElement('div');
  ReactDOM.render(<SelectOption />, div);
  ReactDOM.unmountComponentAtNode(div);
});