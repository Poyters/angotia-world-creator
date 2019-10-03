// import React from 'react';
// import ReactDOM from 'react-dom';
// import Adapter from 'enzyme-adapter-react-16';
// import { shallow, configure } from 'enzyme';

// //Import component
// import SelectOption from './SelectOption';


// configure({adapter: new Adapter()});

// it('SelectOption component renders without crashing', (): void => {
//   const div: HTMLElement = document.createElement('div');
//   const selectOption = shallow(<SelectOption selectTypeQuantity={3} />).dive();
//   ReactDOM.render(selectOption, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

import React from "react";
import { shallow, configure } from "enzyme";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import Adapter from 'enzyme-adapter-react-16';
import { store } from '../../../App';

//Import component
import SelectOption from './SelectOption';

const mockStore = configureMockStore();
const mockedStore = mockStore(store);

configure({adapter: new Adapter()});

describe("Testpage Component", () => {
  const selectOption: any = shallow(
    <Provider store={mockedStore}>
      <SelectOption selectTypeQuantity={3} />
    </Provider>
  );

  it("should render without throwing an error", () => {
    expect(selectOption.exists()).toBe(true);
  });
});