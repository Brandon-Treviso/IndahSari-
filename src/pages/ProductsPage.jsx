import React from "react";
import { Eye, Heart, ShoppingCart } from "lucide-react";

const ProductsPage = ({ products, loading }) => {
  return (
    <div className="animate-fade-in py-20 bg-gradient-to-r from-amber-50 to-amber-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">Produk Kami</h1>
          <p className="text-xl text-gray-600">
            Koleksi lengkap furniture berkualitas tinggi
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-amber-600"></div>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div
                key={product.id}
                className="bg-gradient-to-r from-cyan-50 to-pink-100 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative group">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {product.category}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                    <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button className="bg-white p-3 rounded-full hover:bg-amber-100 transition-colors duration-300 transform hover:scale-110">
                        <Eye size={20} className="text-amber-600" />
                      </button>
                      <button className="bg-white p-3 rounded-full hover:bg-amber-100 transition-colors duration-300 transform hover:scale-110">
                        <Heart size={20} className="text-amber-600" />
                      </button>
                      <button className="bg-white p-3 rounded-full hover:bg-amber-100 transition-colors duration-300 transform hover:scale-110">
                        <ShoppingCart size={20} className="text-amber-600" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-2xl font-bold text-amber-600 mb-4">
                    {product.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Kategori Produk
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {["Sofa", "Meja", "Kursi", "Lemari", "Tempat Tidur"].map(
              (category, index) => (
                <div
                  key={category}
                  className="bg-gradient-to-r from-pink-100 to-slate-200 p-6 rounded-lg text-center hover:from-amber-200 hover:to-amber-300 transition-all duration-300 cursor-pointer animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h3 className="font-semibold text-gray-800">{category}</h3>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
