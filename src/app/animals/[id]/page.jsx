import Modal from "@/Components/Animals/AnimalsDetails/Modal";
import { getAnimals } from "@/lib/data";
import Image from "next/image";
import React from "react";
import { FaLocationDot } from "react-icons/fa6";
const AnimalDetails = async ({ params }) => {
  const { id } = await params;
  const animals = await getAnimals();
  const animal = animals.find((animal) => animal.id == id);

  return (
    <div className="max-w-5xl mx-auto my-10">
      <div className="card bg-base-100 shadow-lg relative">
        <figure>
          <span className="badge badge-primary absolute top-1 -left-5 ">
            {animal.category}
          </span>
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
            <span className="badge badge-primary">{animal.breed}</span>
            <span className="badge badge-success">{animal.type}</span>
          </div>
          <h2 className="card-title text-2xl font-bold">{animal.name}</h2>
          <p>{animal.description}</p>
          <div className="flex items-center justify-between text-gray-600 text-lg">
            <span>{animal.age} years old</span>
            <span>৳{animal.price}</span>
          </div>
          <div className="flex items-center justify-between text-gray-600 text-lg">
            <span>{animal.weight} KG</span>
            <span className="flex items-center gap-1 ">
              <FaLocationDot /> {animal.location}
            </span>
          </div>
          <Modal></Modal>
        </div>
      </div>
    </div>
  );
};

export default AnimalDetails;
