import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { findByTestAttr, checkProps } from "../test/testUtils";
import CardList from "./components/CardList";

Enzyme.configure({ adapter: new Adapter() });
/**
 * Factory function to create a ShallowWrapper for the App component
 * @function setup
 * @param {object} props - Component props specific for this setup
 * @param {any} state - Initial state for setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}, state = null) => {
  const wrapper = shallow(<CardList {...props} />);
  if (state) wrapper.setState(state);
  return wrapper;
};

test("renders without errors", () => {
  const cars = [];
  const wrapper = setup({ cars });
  const component = findByTestAttr(wrapper, "component-carsList");
  expect(component.length).toBe(1);
});
