import React, { useState } from "react";
import FruitsCard from "./FruitsCard";
import Dvider from "./Dvider";

export default function SeasonSpecial() {
  const [fruits, setFruits] = useState([
    {
      id: 4,
      image: 4,
      name: "Grape Fruit",
      price: 180,
      offer: "8% off",
    },
    {
      id: 6,
      image: 6,
      name: "Lemon",
      price: 150,
      offer: "5% off",
    },
    {
      id: 7,
      image: 7,
      name: "Orange",
      price: 200,
      offer: "7% off",
    },
  ]);
  return (
    <section className="w-5/6 mx-auto my-10" id="Special">
      <Dvider title='Season Specials'/>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-14 my-10 py-10  md:px-10 sm:pl-4 md:pr-0 md:pl-16">
        {fruits.map((fruit) => {
          return <FruitsCard key={fruit.id} fruit={fruit} />;
        })}
      </div>
    </section>
  );
}
