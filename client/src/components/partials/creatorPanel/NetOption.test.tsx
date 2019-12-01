import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import { store } from '../../../index';

//Import component
import NetOption from './NetOption';


const mockStore = configureMockStore();
const mockedStore = mockStore(store);

configure({adapter: new Adapter()});

describe('NetOption component', (): void => {
  const netOption: any = shallow(
    <Provider store={mockedStore}>
      <NetOption viewTypeQuantity={3}/>
    </Provider>
  );
  const netGraphicNode = netOption.render().find('.netGraphic');

  expect(netGraphicNode.length).toBe(1);
	
	it("Render NetOption component without errors", () => {
    expect(netOption.exists()).toBe(true);
  });

  it('check start class option--on of NetOption Component', (): void => {
    expect(netGraphicNode.hasClass('option--on')).toEqual(true);
  });
  
  netOption.simulate('click');
  netOption.simulate('click');
  netOption.simulate('click'); //TODO: simulate click doesnt work

  // it('check end class option--off of NetOption Component after all', (): void => {
  //   expect(netGraphicNode).toEqual(true);
  // })
});
