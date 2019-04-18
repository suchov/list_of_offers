import React from "react";
import "./Scroll.css";

const Scroll = props => {
  return <div className="scroll br2 shadow-5">{props.children}</div>;
};

export default Scroll;
