export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-8 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} MyWebsite. All rights reserved.
        </p>

        <div className="flex justify-center gap-4 mt-3 text-sm">
          <a href="#" className="hover:text-white transition">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white transition">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}
