import React from "react";
import { shallow, configure } from "enzyme";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import Adapter from 'enzyme-adapter-react-16';
import { store } from '../../App';

//Import component
import Notifications from './Notifications';


const mockStore = configureMockStore();
const mockedStore = mockStore(store);

configure({adapter: new Adapter()});

describe("Notifications component", () => {
  const notifications: any = shallow(
    <Provider store={mockedStore}>
      <Notifications />
    </Provider>
	);
	
	it("Render notifications component without errors", () => {
    expect(notifications.exists()).toBe(true);
  });
});