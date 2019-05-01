import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import Card from "./components/Card";

Enzyme.configure({ adapter: new EnzymeAdapter() });

test("renders without crashing", () => {
  const wrapper = shallow(<Card />);
  const cardComponent = wrapper.find("[data-test='component-card']");
  expect(cardComponent.length).toBe(1);
});
