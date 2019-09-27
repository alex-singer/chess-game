import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import "jest-styled-components";
import Square from "../Square";

configure({ adapter: new Adapter() });

describe("Square", () => {

  let wrapper;
  let text = "test text";

  beforeEach( () => {
    wrapper = shallow(<Square isBlack>{text}</Square>);
  });

  it("renders a div", () => {
    expect(wrapper.type()).toBe("div");
  });

  it("makes backgroundColor black if 'isBlack' and white if not", () => {
    expect(wrapper.prop("style")["backgroundColor"]).toContain("black");
    wrapper = shallow(<Square />);
    expect(wrapper.prop("style")["backgroundColor"]).toContain("white");
  });

  it("passes 'children' down to the div", () => {
    expect(wrapper.prop("children")).toBe(text);
  });

});
