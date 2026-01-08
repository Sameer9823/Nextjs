export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-3xl bg-white rounded-2xl shadow-md p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          About Us
        </h1>

        <p className="text-gray-600 mb-4 leading-relaxed">
          We are dedicated to building high-quality web applications that are
          fast, scalable, and user-friendly. Our goal is to deliver clean
          solutions using modern technologies.
        </p>

        <p className="text-gray-600 mb-6 leading-relaxed">
          With a focus on performance and design, we strive to create digital
          experiences that add real value for users and businesses.
        </p>

        <div className="flex gap-4">
          <div className="flex-1 text-center p-4 bg-gray-100 rounded-xl">
            <h3 className="text-xl font-semibold text-gray-800">Mission</h3>
            <p className="text-gray-600 mt-2 text-sm">
              Build reliable and scalable applications.
            </p>
          </div>

          <div className="flex-1 text-center p-4 bg-gray-100 rounded-xl">
            <h3 className="text-xl font-semibold text-gray-800">Vision</h3>
            <p className="text-gray-600 mt-2 text-sm">
              Empower users with modern technology.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
