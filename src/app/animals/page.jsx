import AnimalsCard from "@/Components/Animals/AnimalsCard";
import { getAnimals } from "@/lib/data";
import React from "react";

const Animals = async () => {
  const animals = await getAnimals();
  console.log(animals);
  return (
    <div className="container mx-auto my-10 space-y-10">
      <h2 className="text-4xl font-bold text-black sm:px-0 px-2">All Animals</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-2">
        {animals.map((animal) => (
          <AnimalsCard key={animal.id} animal={animal} />
        ))}
      </div>
    </div>
  );
};

export default Animals;
