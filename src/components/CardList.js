import React from "react";
import Card from "./Card";

const CardList = ({ cars }) => {
  return (
    <div>
      {cars.map(car => {
        return (
          <Card
            key={car.id}
            name={car.carGroupInfo.modelExample.name}
            price={car.prices.dayPrice.amount.value}
            currency={car.prices.dayPrice.amount.currency}
            imageUrl={car.carGroupInfo.modelExample.imageUrl}
          />
        );
      })}
    </div>
  );
};

export default CardList;
