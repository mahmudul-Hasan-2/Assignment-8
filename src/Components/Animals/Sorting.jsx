"use client";

import React from "react";

const Sorting = ({ animals, setFilteredAnimals }) => {
  const handleSorting = (value) => {
    if (value == "") {
      setFilteredAnimals([...animals]);
    } else if (value == "High to Low") {
      let higherToLowPriceAnimals = [...animals].sort(
        (a, b) => b.price - a.price,
      );
      setFilteredAnimals(higherToLowPriceAnimals);
    } else if (value == "Low to High") {
      let lowerToHighPriceAnimals = [...animals].sort(
        (a, b) => a.price - b.price,
      );
      setFilteredAnimals(lowerToHighPriceAnimals);
    }
  };
  return (
    <select
      defaultValue=""
      onChange={(e) => handleSorting(e.target.value)}
      className="select"
    >
      <option value="" disabled={true} selected>
        Sort by Price
      </option>
      <option value="High to Low">High to Low</option>
      <option value="Low to High">Low to High</option>
    </select>
  );
};

export default Sorting;
