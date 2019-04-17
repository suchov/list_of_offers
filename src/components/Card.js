import React from 'react';

const Card = ({ name, price, currency, id, imageUrl}) => {
  return (
    <div className="tc dib br3 pa3 ma2 grow bw2 shadow-5">
      <img src={imageUrl} alt="car"/>
      <div>
        <h2>Name: {name}</h2>
        <h2>Price: {price} {currency}</h2>
      </div>
    </div>
  )
}

export default Card;