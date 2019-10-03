import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';

//Import component
import CreditsFooter from './CreditsFooter';

configure({adapter: new Adapter()});

describe("CreditsFooter component", () => {
  const creditsFooter: any = shallow(
    <CreditsFooter />
	);

	it("Render CreditsFooter component without errors", () => {
    expect(creditsFooter.exists()).toBe(true);
  });

  it("Check proper year", () => {
		const currentYear: number = (new Date()).getFullYear();

		expect(creditsFooter.find('a').text()).toEqual(`Created by Poyters @2018-${currentYear}`);
  });
});