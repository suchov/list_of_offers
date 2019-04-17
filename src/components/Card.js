import React from 'react';

const Card = () => {
  return (
    <div className="tc dib br3 pa3 ma2 grow bw2 shadow-5">
      <img src="https://s3.eu-central-1.amazonaws.com/sixt-vehicle-group-info-images-stage/cd5599d916715ec5835be76dad652528de027379.jpg" alt="car"/>
      <div>
        <h2>Name: BMW 3 Series Aut.</h2>
        <h2>Price: 195.66 USD</h2>
      </div>
    </div>
  )
}

export default Card;