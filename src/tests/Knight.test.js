import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import "jest-styled-components";
import Knight from "../Knight";
configure({ adapter: new Adapter() });

describe("Knight", () => {

  let wrapper;

  beforeEach( () => {
      wrapper = shallow(<Knight isBlack/>);
  });

  it("renders a <span>", () => {
    expect(wrapper.type()).toBe("span");
  });

  it("makes peice black is 'isBlack' and white if not", () => {
    expect(wrapper.prop("style")["color"]).toContain("black");
    wrapper = shallow(<Knight />);
    expect(wrapper.prop("style")["color"]).toContain("white");
  });
});
