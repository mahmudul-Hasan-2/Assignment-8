import Image from "next/image";
import Link from "next/link";
import React from "react";

const FeaturedCard = () => {
  return (
    <div className="space-y-6">
      <div className="max-w-4xl text-center mx-auto">
        <h2 className="text-3xl text-black font-bold">Featured Animals</h2>
        <p className="text-base text-gray-700">
          Handpicked for their superior build and majestic presence. Explore our
          elite collection of prime breeds, raised with utmost care to ensure
          the finest Qurbani experience for your family
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-4 w-11/12 mx-auto">
        <div className="p-5 text-lg font-bold text-white bg-gradient-to-tr from-gray-900 via-green-900 to-black shadow-2xl space-y-4 rounded-lg">
          <Image
            src="https://i.ibb.co.com/FkZB96pz/cow1.jpg"
            alt="Cow"
            width={500}
            height={300}
            className="w-full h-50 rounded"
          ></Image>
          <h2>Deshi Shahi Cow</h2>
        </div>
        <div className="p-5 text-lg font-bold text-white bg-gradient-to-tr from-gray-900 via-green-900 to-black shadow-2xl space-y-4 rounded-lg">
          <Image
            src="https://i.ibb.co.com/35xMGqGn/images-q-tbn-ANd9-Gc-Tht0-W2ko-u6r9j3-Ccnc6-XW4h43em3-DAGf-W0-Q-s.jpg"
            alt="Cow"
            width={500}
            height={300}
            className="w-full h-50 rounded"
          ></Image>
          <h2>Black Bengal Goat</h2>
        </div>
        <div className="p-5 text-lg font-bold text-white bg-gradient-to-tr from-gray-900 via-green-900 to-black shadow-2xl space-y-4 rounded-lg">
          <Image
            src="https://i.ibb.co.com/Cp9qjRM3/images-q-tbn-ANd9-Gc-Rc0-Tx0-KFS3-Tg0288-IGWjymi-Az26w-Ub-Cb-UZt-Q-s.jpg"
            alt="Cow"
            width={500}
            height={300}
            className="w-full h-50 rounded"
          ></Image>
          <h2>Deshi Sheep</h2>
        </div>
        <div className="p-5 bg-gradient-to-tr from-gray-900 via-green-900 to-black text-white text-lg font-bold shadow-2xl space-y-4 rounded-lg">
          <Image
            src="https://i.ibb.co.com/QvCSCG0F/images-q-tbn-ANd9-Gc-RMq-QSYEbm-Bo-J4jf3-Mc-VSKV-Hk7kq-FEKMds-Lg-s.jpg"
            alt="Cow"
            width={500}
            height={300}
            className="w-full h-50 rounded"
          ></Image>
          <h2>Friesian Cow</h2>
        </div>
      </div>
      <div className="flex items-center justify-center mt-2">
        <Link href={"/animals"} className="btn btn-success">
          Browse All
        </Link>
      </div>
    </div>
  );
};

export default FeaturedCard;
