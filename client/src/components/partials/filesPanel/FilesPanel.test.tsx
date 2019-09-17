import React from 'react';
import ReactDOM from 'react-dom';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

//Import component
import FilesPanel from './FilesPanel';


configure({adapter: new Adapter()});

it('FilesPanel component renders without crashing', (): void => {
  const div: HTMLElement = document.createElement('div');
  ReactDOM.render(<FilesPanel />, div);
  ReactDOM.unmountComponentAtNode(div);
});