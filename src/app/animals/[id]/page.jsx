import { getAnimals } from "@/lib/data";
import { a, div } from "framer-motion/client";
import Image from "next/image";
import React from "react";
const AnimalDetails = async ({ params }) => {
  const { id } = await params;
  const animals = await getAnimals();
  const animal = animals.find((animal) => animal.id == id);

  return (
    <div className="max-w-5xl mx-auto my-10">
      <div className="card bg-base-100 shadow-sm">
        <figure>
          <Image
            src={animal.image}
            alt="Shoes"
            width={300}
            height={200}
            className="w-full h-96"
          />
        </figure>
        <div className="card-body">
          <div className="flex items-center justify-between">
            <h2 className="card-title text-2xl font-bold">{animal.name}</h2>
            <span className="badge badge-success">{animal.type}</span>
          </div>
          <p>{animal.description}</p>

        </div>
      </div>
    </div>
  );
};

export default AnimalDetails;
