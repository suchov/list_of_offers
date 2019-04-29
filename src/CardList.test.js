import React from "react";
import ReactDOM from "react-dom";
import CardList from "./components/CardList";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<CardList cars={[]} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
