import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import "jest-styled-components";
import Board from "../Board";
import Game, { canMoveKnight } from "../Game";

configure({ adapter: new Adapter() });

describe("Board", () => {

  let wrapper;

  beforeEach( () => {
      wrapper = shallow(<Board knightPosition={[1, 0]}/>);
  });

  it("renders a <div> full of 64 <div>s", () => {
    expect(wrapper.type()).toBe("div");
    expect(wrapper.childAt(0).type()).toBe("div");
    expect(wrapper.childAt(63).type()).toBe("div");
  });

  it("renders renders children's child Square 'div's as alternating black and white", () => {
    expect(wrapper.childAt(0).childAt(0).prop("isBlack")).toBe(false);
    expect(wrapper.childAt(1).childAt(0).prop("isBlack")).toBe(true);
    expect(wrapper.childAt(62).childAt(0).prop("isBlack")).toBe(true);
    expect(wrapper.childAt(63).childAt(0).prop("isBlack")).toBe(false);
  });
});
