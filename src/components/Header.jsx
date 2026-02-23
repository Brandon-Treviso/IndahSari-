import React from "react";
import { Menu, X } from "lucide-react";

const Header = ({
  pages,
  currentPage,
  setCurrentPage,
  isMenuOpen,
  setIsMenuOpen,
}) => {
  return (
    <header className="bg-white shadow-lg sticky top-0 z-50 transition-all duration-300">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-lg overflow-hidden flex items-center justify-center">
              <img
                src="./images/IndahSari.png"
                alt="Indahsari Meubel Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h1 className="text-xl font-bold text-amber-800">
                Indahsari Meubel
              </h1>
              <p className="text-xs text-gray-600">Furniture & Interior</p>
            </div>
          </div>

          <nav className="hidden md:flex space-x-8">
            {pages.map((page) => (
              <button
                key={page.id}
                onClick={() => setCurrentPage(page.id)}
                className={`px-4 py-2 rounded-lg transition-all duration-300 hover:bg-amber-100 ${
                  currentPage === page.id
                    ? "bg-amber-600 text-white"
                    : "text-gray-700"
                }`}
              >
                {page.name}
              </button>
            ))}
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4 animate-fade-in">
            {pages.map((page) => (
              <button
                key={page.id}
                onClick={() => {
                  setCurrentPage(page.id);
                  setIsMenuOpen(false);
                }}
                className={`block w-full text-left px-4 py-3 rounded-lg transition-all duration-300 hover:bg-amber-100 ${
                  currentPage === page.id
                    ? "bg-amber-600 text-white"
                    : "text-gray-700"
                }`}
              >
                {page.name}
              </button>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
