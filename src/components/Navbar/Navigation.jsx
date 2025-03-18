import { useState } from "react";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [aboutUsOpen, setAboutUsOpen] = useState(false);

  return (
    <nav className="bg-white p-6 shadow-md border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto flex justify-center items-center relative">
        {/* Left Section */}
        <ul className="hidden md:flex space-x-8 mx-15.5">
          <li>
            <a href="/" className="text-gray-600 text-lg font-medium hover:text-gray-900 transition duration-300 border-b-2 border-transparent hover:border-gray-900">
              Jewellery
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-600 text-lg font-medium hover:text-gray-900 transition duration-300 border-b-2 border-transparent hover:border-gray-900">
              Offers
            </a>
          </li>
        </ul>

        {/* Logo Centered */}
        <h1 className="text-gray-800 text-3xl font-bold tracking-wide">Logo</h1>

        {/* Right Section */}
        <ul className="hidden md:flex space-x-8 mx-15.5">
          <li
            className="relative"
            onMouseEnter={() => setAboutUsOpen(true)}
            onMouseLeave={() => setAboutUsOpen(false)}
          >
            <a href="./aboutus" className="text-gray-600 text-lg font-medium hover:text-gray-900 transition duration-300 border-b-2 border-transparent hover:border-gray-900">
              About Us
            </a>
            {aboutUsOpen && (
              <ul className="absolute left-0 mt-2 bg-white shadow-lg border border-gray-200 rounded-lg w-48">
                <li><a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Our Story</a></li>
                <li><a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Vision & Mission</a></li>
                <li><a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Leadership</a></li>
              </ul>
            )}
          </li>
          <li>
            <a href="#" className="text-gray-600 text-lg font-medium hover:text-gray-900 transition duration-300 border-b-2 border-transparent hover:border-gray-900">
              Ambassador
            </a>
          </li>
        </ul>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800 focus:outline-none text-2xl">
            {isOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-white w-full absolute left-0 top-16 shadow-md">
          <li>
            <a href="#" className="block text-gray-600 text-lg font-medium hover:text-gray-900 transition duration-300 p-4 border-b">Jewellery</a>
          </li>
          <li>
            <a href="#" className="block text-gray-600 text-lg font-medium hover:text-gray-900 transition duration-300 p-4 border-b">Offers</a>
          </li>
          <li>
            <a href="#" className="block text-gray-600 text-lg font-medium hover:text-gray-900 transition duration-300 p-4 border-b">About Us</a>
          </li>
          <li>
            <a href="#" className="block text-gray-600 text-lg font-medium hover:text-gray-900 transition duration-300 p-4">Ambassador</a>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navigation;