import React from 'react';
import Card from './Card';

const CardList = ({ cars }) => {
  const carComponent = cars[0].offers.map(car => {
    return <Card key={car.id} name={car.carGroupInfo.modelExample.name} price={car.prices.dayPrice.amount.value} currency={car.prices.dayPrice.amount.currency} imageUrl={car.carGroupInfo.modelExample.imageUrl} />
  })
  return (
    <div>
      {carComponent}
    </div>
  )
}

export default CardList;