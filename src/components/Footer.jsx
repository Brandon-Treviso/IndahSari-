import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 overflow-hidden bg-gradient-to-r from-amber-600 to-amber-800 rounded-lg flex items-center justify-center">
                <img
                  src="./images/IndahSari.png"
                  alt="Indahsari Meubel Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold hover:text-amber-600">
                  Indahsari Meubel
                </h3>
                <p className="text-sm text-gray-400 hover:text-amber-600">
                  Furniture & Interior
                </p>
              </div>
            </div>
            <p className="text-gray-400 mb-4 hover:text-amber-600">
              Menghadirkan furniture berkualitas tinggi dengan desain modern dan
              harga terjangkau untuk mewujudkan rumah impian Anda.
            </p>
          </div>

          <div className="md:text-right">
            <h4 className="text-lg font-semibold mb-4 hover:text-amber-600">
              Kontak
            </h4>
            <div className="space-y-2 text-gray-400">
              <p className="flex items-center md:justify-end hover:text-amber-600">
                <MapPin className="w-4 h-4 mr-2 hover:text-amber-600" />
                Pemangkat, Kalimantan Barat
              </p>
              <p className="flex items-center md:justify-end hover:text-amber-600">
                <Phone className="w-4 h-4 mr-2 hover:text-amber-600" />
                +62 822 5439 3113
              </p>
              <p className="flex items-center md:justify-end hover:text-amber-600">
                <Mail className="w-4 h-4 mr-2 hover:text-amber-600" />
                info@indahsarimeubel.com
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 hover:text-amber-600">
          <p>&copy; 2024 Indahsari Meubel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
