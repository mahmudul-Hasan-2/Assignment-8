"use client";

import AnimalsCard from "@/Components/Animals/AnimalsCard";
import Sorting from "@/Components/Animals/Sorting";
import { getAnimals } from "@/lib/data";
import React, { useEffect, useState } from "react";

const Animals = () => {
  const [animals, setAnimals] = useState([]);
  const [filteredAnimals, setFilteredAnimals] = useState(animals);

  useEffect(() => {
    const gettingData = async () => {
      const animals = await getAnimals();
      setAnimals(animals);
    };
    gettingData();
  }, []);
  console.log(filteredAnimals);

  return (
    <div className="container mx-auto my-10 space-y-10">
      <div className="flex items-center justify-between gap-2 flex-wrap px-2">
        <h2 className="text-xl sm:text-4xl font-bold text-black sm:px-0 ">
          All Animals
        </h2>
        <Sorting
          animals={animals}
          setFilteredAnimals={setFilteredAnimals}
        ></Sorting>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-2">
        {filteredAnimals.map((animal) => (
          <AnimalsCard key={animal.id} animal={animal} />
        ))}
      </div>
    </div>
  );
};

export default Animals;
