import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';

//Import component
import VersionMark from './VersionMark';

//Import configs
import creatorConfig from '../../assets/configs/creatorConfig.json';

configure({adapter: new Adapter()});

describe("VersionMark component", () => {
	const versionMark: any = shallow(<VersionMark />);
	
	it("Render VersionMark component without errors", () => {
    expect(versionMark.exists()).toBe(true);
  });

  it("Check proper version", () => {
		expect(versionMark.text()).toEqual(creatorConfig.version);
  });
});