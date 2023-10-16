import React from "react";

export default function FruitsCard({ fruit }) {
  return (
    <div className="rounded-xl overflow-hidden shadow-2xl transform group hover:scale-110 duration-200 relative sm:w-64 lg:w-full">
      <img
        src={require(`../assets/${fruit.image}.jpeg`)}
        alt={`${fruit.image}`} className="object-center object-none h-52  w-80 mx-auto md:w-96 "
      />
      <div className="flex flex-col items-center my-2 font-body text-slate-500">
        <span className="block">{fruit.name}</span>
        <span>₹ {fruit.price}</span>
        <button className="bg-red-400 text-red-50 p-1 rounded-lg text-xs space-y-1 group-hover:visible invisible transform ease-linear">ADD TO CARD <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 text-white inline-block"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg></button>
      </div>
      <span className="absolute right-2 top-3 font-body bg-sky-300 text-white rounded-lg border border-sky-300 px-1 ">{fruit.offer}</span>
    </div>
  );
}
