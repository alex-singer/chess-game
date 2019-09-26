import React from "react"
import { configure, shallow } from "enzyme"
import Adapter from "enzyme-adapter-react-16";
import Knight from "./Knight";

configure({ adapter: new Adapter() });

describe("Knight", () => {
  it("renders a <span>", () => {
    const wrapper = shallow(<Knight/>);
    expect(wrapper.type()).toBe("span");
  });
});
