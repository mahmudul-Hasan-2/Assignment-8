import Link from "next/link";

const NotFound = () => {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-white px-4 sm:px-6">
      <div className="max-w-md w-full text-center">
        <div className="mb-6 sm:mb-8 flex justify-center">
          <div className="h-20 w-20 sm:h-24 sm:w-24 bg-gray-50 rounded-full flex items-center justify-center border border-gray-100 shadow-sm transition-transform hover:rotate-12">
            <span className="text-3xl sm:text-4xl text-gray-600">🔍</span>
          </div>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
          Page Not Found
        </h1>
        <p className="text-base sm:text-lg text-gray-500 mb-8 sm:mb-10 leading-relaxed px-2">
          The page you are looking for doesn&apos;t exist or has been moved to a
          new location. Let&apos;s get you back on track.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
          <Link
            href="/"
            className="w-full sm:w-auto px-8 py-3 bg-gray-900 text-white font-semibold rounded-xl hover:bg-black active:scale-95 transition-all duration-200 shadow-md"
          >
            Go to Homepage
          </Link>
          <Link
            href="/animals"
            className="w-full sm:w-auto px-8 py-3 bg-white text-gray-700 font-semibold rounded-xl border border-gray-200 hover:bg-gray-50 active:scale-95 transition-all duration-200 shadow-sm"
          >
            Browse Animals
          </Link>
        </div>

        <p className="mt-12 text-xs sm:text-sm text-gray-400 font-mono tracking-widest">
          STATUS_CODE: 404_NOT_FOUND
        </p>
      </div>
    </div>
  );
};

export default NotFound;
