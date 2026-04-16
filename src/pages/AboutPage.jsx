import React from "react";
import { Eye, Award, Star } from "lucide-react";

const AboutPage = () => {
  return (
    <div className="animate-fade-in py-20 bg-gradient-to-r from-amber-50 to-amber-100">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-800 mb-6">
              Tentang Indahsari Meubel
            </h1>
            <p className="text-xl text-gray-600 italic font-semibold">
              Menghadirkan furniture berkualitas untuk rumah impian Anda
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="animate-slide-in-left">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Sejarah Kami
              </h2>
              <p className="text-gray-600 mb-4 font-medium">
                Toko IndahSari Meubel yang merupakan salah satu perusahaan
                furniture terbaik di area Pemangkat, Furniture di tempat
                tersebut lengkap dan pastinya pelanggan akan puas dengan
                pelayanan yang diberikan. Kami menyediakan berbagai jenis
                furniture mulai dari sofa, meja, kursi, lemari, dan masih banyak
                lagi.
              </p>
              <p className="text-gray-600">
                Dengan pengalaman bertahun tahun, kami memahami kebutuhan dan
                selera konsumen Indonesia akan furniture yang tidak hanya indah,
                tetapi juga fungsional dan tahan lama.
              </p>
            </div>
            <div className="animate-slide-in-right">
              <img
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=400&fit=crop&crop=center"
                alt="Workshop"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "Visi",
                content:
                  "Menjadi perusahaan furniture terdepan di Indonesia yang menghadirkan produk berkualitas tinggi dengan desain inovatif dan harga kompetitif.",
                icon: Eye,
              },
              {
                title: "Misi",
                content:
                  "Menyediakan furniture berkualitas tinggi, memberikan pelayanan terbaik, dan terus berinovasi untuk kepuasan pelanggan.",
                icon: Award,
              },
              {
                title: "Nilai",
                content:
                  "Kualitas, Integritas, Inovasi, dan Kepuasan Pelanggan adalah nilai-nilai yang selalu kami junjung tinggi.",
                icon: Star,
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-cyan-50 to-pink-100 p-8 rounded-lg shadow-lg text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-amber-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.content}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-amber-50 to-amber-100 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
              Tim Ahli Kami
            </h2>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                {
                  name: "Udin",
                  position: "Founder & CEO",
                  image:
                    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
                },
                {
                  name: "John Doe",
                  position: "Production Manager",
                  image:
                    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
                },
              ].map((member, index) => (
                <div
                  key={index}
                  className="text-center animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h4 className="text-lg font-semibold text-gray-800">
                    {member.name}
                  </h4>
                  <p className="text-amber-500">{member.position}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
