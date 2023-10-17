import React, { useState } from "react";

export default function Filters() {
  const [selectedItem, setSelectedItem] = useState(1);
  return (
    <section className="my-10 py-3 md:w-3/6 w-2/5 mx-auto flex justify-around flex-col md:flex-row sticky">
      <button
        className={`buttonStyle ${
          selectedItem === 1 ? "bg-green-400 text-white" : "text-slate-500"
        }`}
        onClick={() => setSelectedItem(1)}
      >
      Latest
      </button>
      <button className={`buttonStyle ${
          selectedItem === 2 ? "bg-green-400 text-white" : "text-slate-500"
        }`} onClick={() => setSelectedItem(2)}>
        Best Seller
      </button>
      <button className={`buttonStyle ${
          selectedItem === 3 ? "bg-green-400 text-white" : "text-slate-500"
        }`} onClick={() => setSelectedItem(3)}>
        <a href="#Special">Special</a>
      </button>
    </section>
  );
}
