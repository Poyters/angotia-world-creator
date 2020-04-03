import React from 'react';
import ReactDOM from 'react-dom';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
import MapSizeInput from './MapSizeInput';


configure({adapter: new Adapter()});

it('MapSizeInput component renders without crashing', (): void => {
  const div: HTMLElement = document.createElement('div');
  ReactDOM.render(
    <MapSizeInput 
      id="testInput" 
      currValue={10} 
      changeValue={() => {}} />, div
  );
  ReactDOM.unmountComponentAtNode(div);
});