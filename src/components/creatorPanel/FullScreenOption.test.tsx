import React from 'react';
import ReactDOM from 'react-dom';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

//Import component
import FullScreenOption from './FullScreenOption';


configure({adapter: new Adapter()});

it('FullScreenOption component renders without crashing', () => {
  const div: HTMLElement = document.createElement('div');
  ReactDOM.render(<FullScreenOption />, div);
  ReactDOM.unmountComponentAtNode(div);
});


test('FullScreenOption change class name to on', () => {
  const fullScreenOption: any = shallow(<FullScreenOption/>);

  expect(fullScreenOption.hasClass('option--off')).toEqual(true);
  fullScreenOption.simulate('click');
  expect(fullScreenOption.hasClass('option--on')).toEqual(true);
});


test('FullScreenOption full screen running', () => {
  const fullScreenOption: any = shallow(<FullScreenOption/>);

  fullScreenOption.simulate('click');
  expect(!window.screenTop && !window.screenY).toEqual(true);
});