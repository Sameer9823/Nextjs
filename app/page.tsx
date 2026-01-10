export default async function HomePage() {

  try {
    const res = await fetch('https://api.github.com/users/sameer9823');
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
 
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-4xl text-center bg-white rounded-2xl shadow-md p-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to Our Website
        </h1>

        <p className="text-gray-600 text-lg mb-6">
          We build modern, scalable, and user-friendly web applications using
          the latest technologies.
        </p>

        <div className="flex justify-center gap-4">
          <a
            href="/about"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            About Us
          </a>

          <a
            href="/contact"
            className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition"
          >
            Contact
          </a>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-gray-100 rounded-xl">
            <h3 className="text-xl font-semibold text-gray-800">
              Fast
            </h3>
            <p className="text-gray-600 mt-2 text-sm">
              Optimized performance with modern frameworks.
            </p>
          </div>

          <div className="p-6 bg-gray-100 rounded-xl">
            <h3 className="text-xl font-semibold text-gray-800">
              Secure
            </h3>
            <p className="text-gray-600 mt-2 text-sm">
              Best practices for security and data protection.
            </p>
          </div>

          <div className="p-6 bg-gray-100 rounded-xl">
            <h3 className="text-xl font-semibold text-gray-800">
              Scalable
            </h3>
            <p className="text-gray-600 mt-2 text-sm">
              Built to grow with your business needs.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-10">
        
        <p className="text-gray-600 text-sm">
          Powered by: Next.js, React, and Tailwind CSS
        </p>
      </div>
    </div>
  );
}
