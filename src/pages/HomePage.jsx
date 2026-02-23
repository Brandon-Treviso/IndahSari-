import React, { useState, useEffect } from "react";
import { Users, Award, ShoppingCart, Star, Eye, Heart } from "lucide-react";

const HomePage = ({ products, loading, setCurrentPage }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "Wujudkan Rumah Impian Anda";

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 100);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  const handleProductDetail = () => {
    setCurrentPage("products");
  };

  return (
    <div className="animate-fade-in">
      <section className="bg-gradient-to-r from-amber-50 to-amber-100 py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slide-in-left">
              <h1 className="text-5xl font-bold text-gray-800 leading-tight min-h-[120px]">
                {displayText.split(" ").map((word, index) => (
                  <span key={index}>
                    {word === "Impian" ? (
                      <span className="text-amber-600">{word}</span>
                    ) : (
                      word
                    )}
                    {index < displayText.split(" ").length - 1 && " "}
                  </span>
                ))}
                <span className="animate-pulse text-amber-600"></span>
              </h1>
              <p className="text-xl text-gray-600">
                Furniture berkualitas tinggi dengan desain modern dan harga
                terjangkau. Pengalaman lebih dari 15 tahun melayani kebutuhan
                furniture Anda.
              </p>
              <div className="flex space-x-4">
                <button
                  onClick={() => setCurrentPage("products")}
                  className="bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-all duration-300 transform hover:scale-105"
                >
                  Lihat Produk
                </button>
                <button
                  onClick={() => setCurrentPage("contact")}
                  className="border-2 border-amber-600 text-amber-600 px-8 py-3 rounded-lg font-semibold hover:bg-amber-600 hover:text-white transition-all duration-300"
                >
                  Hubungi Kami
                </button>
              </div>
            </div>
            <div className="animate-slide-in-right">
              <img
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop&crop=center"
                alt="Furniture Display"
                className="rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-violet-100 to-cyan-100">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { icon: Users, number: "1000+", label: "Pelanggan Puas" },
              { icon: Award, number: "15+", label: "Tahun Pengalaman" },
              { icon: ShoppingCart, number: "500+", label: "Produk Terjual" },
              { icon: Star, number: "4.9", label: "Rating Pelanggan" },
            ].map((stat, index) => (
              <div
                key={index}
                className="space-y-4 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto">
                  <stat.icon className="w-8 h-8 text-amber-600" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-800">
                    {stat.number}
                  </h3>
                  <p className="text-gray-600">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Produk Unggulan
            </h2>
            <p className="text-xl text-gray-600">
              Koleksi terbaru furniture premium kami
            </p>
          </div>

          {loading ? (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-amber-600"></div>
            </div>
          ) : (
            <div className="grid md:grid-cols-3 gap-8">
              {products.slice(0, 3).map((product, index) => (
                <div
                  key={product.id}
                  className="bg-gradient-to-r from-violet-100 to-cyan-100 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="relative group">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                      <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button
                          onClick={handleProductDetail}
                          className="bg-white p-2 rounded-full hover:bg-amber-100 transition-colors duration-300"
                        >
                          <Eye size={20} className="text-amber-600" />
                        </button>
                        <button className="bg-white p-2 rounded-full hover:bg-amber-100 transition-colors duration-300">
                          <Heart size={20} className="text-amber-600" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      {product.name}
                    </h3>
                    <p className="text-2xl font-bold text-amber-600">
                      {product.price}
                    </p>
                    <button
                      onClick={handleProductDetail}
                      className="w-full mt-4 bg-amber-600 text-white py-2 rounded-lg hover:bg-amber-700 transition-colors duration-300"
                    >
                      Lihat Detail
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
