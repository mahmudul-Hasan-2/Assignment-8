"use client";

import { useSpring, animated } from "@react-spring/web";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaLocationDot } from "react-icons/fa6";

const AnimalsCard = ({ animal }) => {
  const style = useSpring({
    from: { opacity: 0, transform: "scale(0.9)" },
    to: { opacity: 1, transform: "scale(1)" },
  });
  return (
    <div className="card  bg-base-100 h-full shadow-sm">
      <figure>
        <animated.div style={style}>
          <Image
            src={animal.image}
            alt={animal.name}
            width={300}
            height={500}
            className="w-full h-70 p-2"
          />
        </animated.div>
      </figure>
      <div className="card-body ">
        <h2 className="card-title text-2xl font-bold">{animal.name}</h2>
        <p>{animal.description}</p>
        <div className="flex items-center justify-between text-gray-600">
          <div className="flex items-center gap-1 text-lg font-bold">
            <span className="">৳</span>
            <span>{animal.price}</span>
          </div>
          <div className="flex items-center gap-1 text-lg">
            <FaLocationDot></FaLocationDot>
            <span>{animal.location}</span>
          </div>
        </div>
        <div className="flex items-center justify-between text-gray-600">
          <div className="flex items-center gap-1 text-lg">
            <span>
              {animal.age} {animal.age > 1 ? "Years" : "Year"} Old
            </span>
          </div>
          <div className="flex items-center gap-[2px] text-lg">
            <span>{animal.weight} KG</span>
          </div>
        </div>

        <div>
          <Link href={`/animals/${animal.id}`} className="btn w-full">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AnimalsCard;
