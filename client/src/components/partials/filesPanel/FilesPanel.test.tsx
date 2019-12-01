import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import { store } from '../../../index';

//Import component
import FilesPanel from './FilesPanel';

const mockStore = configureMockStore();
const mockedStore = mockStore(store);

configure({adapter: new Adapter()});

describe('FilesPanel component', (): void => {
  const filesPanel: any = shallow(
    <Provider store={mockedStore}>
      <FilesPanel />
    </Provider>
  );

	it("Render FilesPanel component without errors", () => {
    expect(filesPanel.exists()).toBe(true);
  });
});
