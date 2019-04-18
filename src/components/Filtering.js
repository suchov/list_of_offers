import React from 'react';

const Filtering = ({ nandleClick }) => {
  return (
    <div>
      <button type="button" value="name" onClick={nandleClick} className="f6 link dim br3 ma2 ba ph3 pv2 mb2 dib black">Sort by Name</button>
      <button type="button" value="price" onClick={nandleClick} className="f6 link dim br3 ma2 ba ph3 pv2 mb2 dib black">Sort by Price</button>
      <button type="button" value="popularity" onClick={nandleClick} className="f6 link dim br3 ma2 ba ph3 pv2 mb2 dib black">Sort by Popularity</button>
    </div>
  )
}

export default Filtering;