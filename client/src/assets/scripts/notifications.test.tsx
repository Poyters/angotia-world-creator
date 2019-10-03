import React from "react";
import { shallow, configure } from "enzyme";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import Adapter from 'enzyme-adapter-react-16';
import { store } from '../../App';

//Import component
import Notifications from '../../components/partials/Notifications';

//Import scripts
import { setActionNote } from './notifications';


const mockStore = configureMockStore();
const mockedStore = mockStore(store);
console.log(mockedStore.getState());

configure({adapter: new Adapter()});

describe("setActionNote script", () => {
  const notifications: any = shallow(
    <Provider store={mockedStore}>
      <Notifications />
    </Provider>
	);
	const noteTextNode = notifications.render().find('#noteText');
	
	it("Render Notifications component without errors", () => {
    expect(notifications.exists()).toBe(true);
  });

  it("Create new note", () => {
		const exmapleMess = 'Example notification message';

		console.log(mockedStore.getState());
		setActionNote(exmapleMess);
		expect(noteTextNode.text()).toEqual(true);
  });
});