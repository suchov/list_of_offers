import React from "react";

const Filtering = ({ handleClick }) => {
  return (
    <div data-test="component-filtering">
      <button
        type="button"
        value="name"
        onClick={handleClick}
        className="f6 link dim br3 ma2 ba ph3 pv2 mb2 dib black"
      >
        Sort by Name
      </button>
      <button
        type="button"
        value="price"
        onClick={handleClick}
        className="f6 link dim br3 ma2 ba ph3 pv2 mb2 dib black"
      >
        Sort by Price
      </button>
      <button
        type="button"
        value="popularity"
        onClick={handleClick}
        className="f6 link dim br3 ma2 ba ph3 pv2 mb2 dib black"
      >
        Sort by Popularity
      </button>
    </div>
  );
};

export default Filtering;
