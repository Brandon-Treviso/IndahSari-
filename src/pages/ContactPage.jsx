import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  Youtube,
  MessageCircle,
} from "lucide-react";

const ContactPage = () => {
  return (
    <div className="animate-fade-in py-20 bg-amber-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            Hubungi Kami
          </h1>
          <p className="text-xl text-gray-600">
            Kami siap memberikan Inovasi yang terbaik untuk kebutuhan furniture
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="animate-slide-in-left">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              Informasi Kontak
            </h2>

            <div className="space-y-6 mb-8">
              {[
                {
                  icon: MapPin,
                  title: "Alamat",
                  content:
                    "Jl. Ahmad Yani, Harapan, Kec. Pemangkat, Kabupaten Sambas, Kalimantan Barat 79453",
                },
                {
                  icon: Phone,
                  title: "Telepon",
                  content: "+62 822 5439 3113",
                },
                {
                  icon: Mail,
                  title: "Email",
                  content: "info@indahsarimeubel.com",
                },
                {
                  icon: Clock,
                  title: "Jam Buka",
                  content:
                    "Senin - Sabtu: 08:00 - 17:00\nMinggu: 08:00 - 12:00",
                },
              ].map((contact, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <contact.icon className="w-6 h-6 text-amber-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      {contact.title}
                    </h3>
                    <p className="text-gray-600 whitespace-pre-line">
                      {contact.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-amber-100 to-indigo-100 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4 italic text-center">
                Media Sosial
              </h3>
              <div className="flex space-x-4 gap-8 justify-center">
                {[
                  {
                    icon: Facebook,
                    name: "Facebook",
                    url: "https://www.facebook.com/Caroline.Gumarus",
                    bgColor: "bg-blue-600 hover:bg-blue-700",
                  },
                  {
                    icon: Instagram,
                    name: "Instagram",
                    url: "https://www.instagram.com/brandon.treviso/",
                    bgColor: "bg-pink-600 hover:bg-pink-700",
                  },
                  {
                    icon: MessageCircle,
                    name: "WhatsApp",
                    url: "https://wa.me/6282254393113",
                    bgColor: "bg-green-600 hover:bg-green-700",
                  },
                  {
                    icon: Youtube,
                    name: "YouTube",
                    url: "https://www.youtube.com/channel/UCRJ6Y2sl4ibrWrBbSuATRcg",
                    bgColor: "bg-red-600 hover:bg-red-700",
                  },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${social.bgColor} text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl`}
                    title={social.name}
                  >
                    <social.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="animate-slide-in-right">
            <div className="bg-gradient-to-r from-cyan-50 to-indigo-100 p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 hover:text-amber-500">
                Kirim Pesan
              </h2>
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2 hover:text-amber-500">
                      Nama Lengkap
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300 hover:bg-amber-50"
                      placeholder="Masukkan nama lengkap"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2 hover:text-amber-500">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300 hover:bg-amber-50"
                      placeholder="email@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 hover:text-amber-500">
                    Nomor Telepon
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300 hover:bg-amber-50"
                    placeholder="+62 xxx xxxx xxxx"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 hover:text-amber-500">
                    Subjek
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300 hover:bg-amber-50">
                    <option>Pilih subjek</option>
                    <option>Konsultasi Produk</option>
                    <option>Custom Furniture</option>
                    <option>Komplain</option>
                    <option>Lainnya</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 hover:text-amber-500">
                    Pesan
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300 hover:bg-amber-50"
                    placeholder="Tulis pesan Anda di sini..."
                  ></textarea>
                </div>
                <button
                  type="button"
                  className="w-full bg-amber-600 text-white py-3 rounded-lg font-semibold hover:bg-amber-500 transition-all duration-300 transform hover:scale-105"
                  onClick={() => alert("Pesan terkirim")}
                >
                  Kirim Pesan
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Lokasi Toko
          </h2>
          <div className="bg-gradient-to-r from-pink-50 to-indigo-100 p-4 rounded-lg shadow-lg">
            <div className="w-full h-96 bg-gray-200 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.9823531076154!2d108.99208517363118!3d1.1729061988158809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31e482cd82f19ad3%3A0xedf9494010fe9f19!2sTOKO%20INDAH%20SARI!5e0!3m2!1sid!2sid!4v1754295760536!5m2!1sid!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi Toko Indahsari Meubel"
                className="rounded-lg"
              ></iframe>
            </div>
            <div className="mt-4 text-center">
              <p className="text-gray-600">
                <MapPin className="inline w-5 h-5 mr-2 text-amber-500" />
                Jl. Ahmad Yani, Harapan, Kec. Pemangkat, Kabupaten Sambas,
                Kalimantan Barat 79453
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
