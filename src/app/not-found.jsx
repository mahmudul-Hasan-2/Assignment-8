import Link from "next/link";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-6">
      <div className="max-w-md w-full text-center">
        {/* সিম্পল আইকন */}
        <div className="mb-8 flex justify-center">
          <div className="h-24 w-24 bg-gray-50 rounded-full flex items-center justify-center border border-gray-100 shadow-sm">
            <span className="text-4xl">🔍</span>
          </div>
        </div>

        {/* টেক্সট কন্টেন্ট */}
        <h1 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">
          Page Not Found
        </h1>
        <p className="text-gray-500 text-lg mb-10 leading-relaxed">
          The page you are looking for doesn't exist or has been moved to a new
          location. Let's get you back on track.
        </p>

        {/* অ্যাকশন বাটন */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="px-8 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-black transition-colors duration-200"
          >
            Go to Homepage
          </Link>
          <Link
            href="/animals"
            className="px-8 py-3 bg-white text-gray-700 font-medium rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors duration-200"
          >
            Browse Animals
          </Link>
        </div>

        {/* নিচে ছোট একটি নোট */}
        <p className="mt-12 text-sm text-gray-400">
          Error Code: 404_LOCATION_NOT_FOUND
        </p>
      </div>
    </div>
  );
};

export default NotFound;
