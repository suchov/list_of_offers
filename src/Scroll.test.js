import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { findByTestAttr, checkProps } from "../test/testUtils";
import Scroll from "./components/Scroll";

Enzyme.configure({ adapter: new Adapter() });
/**
 * Factory function to create a ShallowWrapper for the CardList component
 * @function setup
 * @param {object} props - Component props specific for this setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  return shallow(<Scroll {...props} />);
};

test("renders without crashing", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "component-scroll");
  expect(component.length).toBe(1);
});
