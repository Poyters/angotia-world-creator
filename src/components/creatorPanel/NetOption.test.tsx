import React from 'react';
import ReactDOM from 'react-dom';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import { initState } from '../../redux/reducers/mapReducer';

//Import component
import NetOption from './NetOption';


configure({adapter: new Adapter()});

it('NetOption component renders without crashing', () => {
  const div: HTMLElement = document.createElement('div');
  ReactDOM.render(<NetOption />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('NetOption component option on/off', () => {
  const mapSize: object = {...initState.size};
  let netOption: any = shallow(<NetOption mapSize={mapSize} viewTypeQuantity={3}/> )  

  it('check start class option--on of NetOption Component', () => {
    expect(netOption.hasClass('option--on')).toEqual(true);
  })
  
  netOption.simulate('click');
  netOption.simulate('click');
  netOption.simulate('click');

  it('check end class option--off of NetOption Component after all', () => {
    expect(netOption.hasClass('option--off')).toEqual(true);
  })
});