import React from "react";
import { shallow, configure } from "enzyme";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import Adapter from 'enzyme-adapter-react-16';
import { store } from '../../index';
import Notifications from '../../components/partials/Notifications';
// import { setActionNote } from './notifications';


const mockStore = configureMockStore();
const mockedStore = mockStore(store);

configure({adapter: new Adapter()});

describe("setActionNote script", () => {
  const notifications = shallow(
    <Provider store={mockedStore}>
      <Notifications />
    </Provider>
	);
	// const noteTextNode = notifications.render().find('#noteText');
	
	it("Render Notifications component without errors", () => {
    expect(notifications.exists()).toBe(true);
  });

  // it("Create new note", () => {
	// 	const exmapleMess = 'Example notification message';

	// 	setActionNote(exmapleMess);
	// 	expect(noteTextNode.text()).toEqual(true);
  // });
});