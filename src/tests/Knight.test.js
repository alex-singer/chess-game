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

  it("renders a black icon if 'isBlack' and a white icon if not", () => {
    expect(wrapper.prop("children")["type"].name).toBe("SvgBlackKnight");
    wrapper = shallow(<Knight />);
    expect(wrapper.prop("children")["type"].name).toBe("SvgWhiteKnight");
  });
});
