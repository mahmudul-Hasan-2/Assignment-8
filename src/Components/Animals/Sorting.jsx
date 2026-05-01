"use client";

import React, { useEffect } from "react";

const Sorting = ({ animals, setFilteredAnimals }) => {
  useEffect(() => {
    setFilteredAnimals(animals);
  }, [setFilteredAnimals, animals]);

  const handleSorting = (value) => {
    let sortedData = [...animals];

    if (value === "All") {
      setFilteredAnimals(sortedData);
    } else if (value === "High to Low") {
      sortedData.sort((a, b) => b.price - a.price);
    } else if (value === "Low to High") {
      sortedData.sort((a, b) => a.price - b.price);
    }

    setFilteredAnimals(sortedData);
  };

  return (
    <select
      defaultValue=""
      onChange={(e) => handleSorting(e.target.value)}
      className="select select-bordered w-full max-w-xs"
    >
      <option value="" disabled>
        Sort by Price
      </option>

      <option value="All">All Animals</option>

      <option value="High to Low">High to Low</option>
      <option value="Low to High">Low to High</option>
    </select>
  );
};

export default Sorting;
