"use client";

import Link from "next/link";
import { useSpring, animated } from "@react-spring/web";

const Banner = () => {
  const style = useSpring({
    from: { opacity: 0, transform: "scale(0.9)" },
    to: { opacity: 1, transform: "scale(1)" },
  });
  return (
    <animated.div style={style}>
      <div className=" py-15 px-2  mx-auto  bg-gradient-to-tr from-gray-900 via-green-900 to-black rounded-lg">
        <div className="space-y-5 mb-10">
          <h2 className="text-xl md:text-2xl lg:text-4xl font-bold text-center text-white">
            Welcome to Our <span className="text-green-500">Qurbani Store</span>
          </h2>
          <p className="text-center text-gray-300 max-w-3xl mx-auto">
            Connecting Faith with Convenience: Experience the Most Trusted
            Digital Marketplace to Find, Explore, and Secure Your Preferred
            Healthy Livestock for a Blessed and Stress-Free Qurbani
            Journey.{" "}
          </p>
        </div>

        <div className="flex items-center justify-center">
          <Link
            href="/animals"
            className="btn btn-lg bg-green-500 hover:bg-green-600 border-none text-white px-10 rounded-full font-bold shadow-xl shadow-green-500/20 transition-all hover:scale-105 active:scale-95"
          >
            Browse Animals
          </Link>
        </div>
      </div>
    </animated.div>
  );
};

export default Banner;
