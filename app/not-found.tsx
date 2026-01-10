import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-black via-gray-900 to-black px-4">
      <div className="text-center max-w-lg">
        {/* Big 404 */}
        <h1 className="text-8xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-indigo-400 via-purple-500 to-pink-500 drop-shadow-lg">
          404
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-2xl font-semibold text-gray-200">
          Page Not Found
        </p>

        {/* Description */}
        <p className="mt-3 text-gray-400 leading-relaxed">
          Sorry, the page you’re looking for doesn’t exist or has been moved.
        </p>

        {/* Divider */}
        <div className="mt-6 h-px w-24 mx-auto bg-linear-to-r from-transparent via-gray-600 to-transparent" />

        {/* Button */}
        <Link href="/" className="mt-6 inline-block px-6 py-3 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 transition"   >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
