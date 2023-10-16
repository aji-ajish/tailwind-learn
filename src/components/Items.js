import React, { useState } from "react";
import FruitsCard from "./FruitsCard";

export default function Items() {
  const [fruits, setFruits] = useState([
    {
      id: 1,
      image: 1,
      name: "Green Grapes",
      price: 100,
      offer:'2% off',
    },
    {
      id: 2,
      image: 2,
      name: "Pomegranate",
      price: 200,
      offer:'4% off',
    },
    {
      id: 3,
      image: 3,
      name: "Black Grapes",
      price: 250,
      offer:'2% off',
    },
    {
      id: 4,
      image: 4,
      name: "Grape Fruit",
      price: 180,
      offer:'8% off',
    },
    {
      id: 5,
      image: 5,
      name: "Berry",
      price: 120,
      offer:'10% off',
    },
    {
      id: 6,
      image: 6,
      name: "Lemon",
      price: 150,
      offer:'5% off',
    },
    {
      id: 7,
      image: 7,
      name: "Orange",
      price: 200,
      offer:'7% off',
    },
  ]);
  return (
    <section className="w-5/6 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-16 my-10 py-10  md:px-10 sm:pl-4 md:pr-0 md:pl-16" id="latest">
      {fruits.map((fruit) => {
        return <FruitsCard key={fruit.id} fruit={fruit} />;
      })}
    </section>
  );
}
