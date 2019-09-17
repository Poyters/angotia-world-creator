import React from 'react';
import ReactDOM from 'react-dom';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

//Import component
import Notifications from './Notifications';


configure({adapter: new Adapter()});

it('Notifications component renders without crashing', (): void => {
  const div: HTMLElement = document.createElement('div');
  ReactDOM.render(<Notifications />, div);
  ReactDOM.unmountComponentAtNode(div);
});