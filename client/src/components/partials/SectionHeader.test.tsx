import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';

//Import component
import SectionHeader from './SectionHeader';

configure({adapter: new Adapter()});

describe("SectionHeader component", () => {
	const exampleHeader: string = "example header text";
  const sectionHeader: any = shallow(
    <SectionHeader headerTxt={exampleHeader} />
	);
	it("Render SectionHeader component without errors", () => {
    expect(sectionHeader.exists()).toBe(true);
  });

  it("Check proper header text", () => {
		expect(sectionHeader.find('h1').text()).toEqual(exampleHeader);
  });
});