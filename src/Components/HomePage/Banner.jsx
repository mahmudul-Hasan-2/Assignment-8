import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="container py-15 px-2  my-10 space-y-8 mx-auto  bg-gradient-to-tr from-gray-900 via-green-900 to-black rounded-lg">
      <div className="space-y-5 ">
        <h2 className="text-xl md:text-2xl lg:text-4xl font-bold text-center text-white">
          Welcome to Our <span className="text-green-500">Qurbani Store</span>
        </h2>
        <p className="text-center text-gray-300 max-w-3xl mx-auto">
          Connecting Faith with Convenience: Experience the Most Trusted Digital
          Marketplace to Find, Explore, and Secure Your Preferred Healthy
          Livestock for a Blessed and Stress-Free Qurbani Journey.{" "}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-4 w-11/12 mx-auto">
        <div className="p-5 bg-white/10 text-xl font-bold text-white space-y-4 border border-gray-700 shadow ">
          <Image
            src="https://i.ibb.co.com/FkZB96pz/cow1.jpg"
            alt="Cow"
            width={500}
            height={300}
            className="w-full h-50 rounded"
          ></Image>
          <p>Shahi Cow</p>
        </div>
        <div className="p-5 bg-white/10 text-xl font-bold text-white space-y-4 border border-gray-700 shadow ">
          <Image
            src="https://i.ibb.co.com/35xMGqGn/images-q-tbn-ANd9-Gc-Tht0-W2ko-u6r9j3-Ccnc6-XW4h43em3-DAGf-W0-Q-s.jpg"
            alt="Cow"
            width={500}
            height={300}
            className="w-full h-50 rounded"
          ></Image>
          <p>Bengal Goat</p>
        </div>
        <div className="p-5 bg-white/10 text-xl font-bold text-white space-y-4 border border-gray-700 shadow ">
          <Image
            src="https://i.ibb.co.com/Cp9qjRM3/images-q-tbn-ANd9-Gc-Rc0-Tx0-KFS3-Tg0288-IGWjymi-Az26w-Ub-Cb-UZt-Q-s.jpg"
            alt="Cow"
            width={500}
            height={300}
            className="w-full h-50 rounded"
          ></Image>
          <p>Desi Sheep</p>
        </div>
        <div className="p-5 bg-white/10 text-xl font-bold text-white space-y-4 border border-gray-700 shadow ">
          <Image
            src="https://i.ibb.co.com/QvCSCG0F/images-q-tbn-ANd9-Gc-RMq-QSYEbm-Bo-J4jf3-Mc-VSKV-Hk7kq-FEKMds-Lg-s.jpg"
            alt="Cow"
            width={500}
            height={300}
            className="w-full h-50 rounded"
          ></Image>
          <p>Friesian Cow</p>
        </div>
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
  );
};

export default Banner;
