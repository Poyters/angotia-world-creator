import React from 'react';
import { shallow, configure } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import Adapter from 'enzyme-adapter-react-16';
import { store } from '../../index';
import { Map } from './Map';


const mockStore = configureMockStore();
const mockedStore = mockStore(store);

configure({ adapter: new Adapter() });

describe('Map component', () => {
  const map = shallow(
    <Provider store={mockedStore}>
      <Map />
    </Provider>
  );
	
	it('Render Map component without errors', () => {
    expect(map.exists()).toBe(true);
  });

});