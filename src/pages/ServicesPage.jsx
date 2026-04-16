import React from "react";
import { Eye, Award, Clock, Star, ShoppingCart, Users } from "lucide-react";

const ServicesPage = ({ testimonials, loading }) => {
  return (
    <div className="animate-fade-in py-20 bg-amber-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            Layanan Kami
          </h1>
          <p className="text-xl text-gray-600">
            Pelayanan terbaik untuk kepuasan pelanggan
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {[
            {
              title: "Konsultasi Desain Gratis",
              description:
                "Tim desainer berpengalaman siap membantu mewujudkan konsep interior rumah impian Anda",
              icon: Eye,
              features: [
                "Konsultasi online & offline",
                "Visualisasi 3D",
                "Rekomendasi produk",
              ],
            },
            {
              title: "Custom Furniture",
              description:
                "Layanan pembuatan furniture khusus sesuai kebutuhan dan ukuran ruangan Anda",
              icon: Award,
              features: [
                "Desain sesuai keinginan",
                "Material premium",
                "Garansi kualitas",
              ],
            },
            {
              title: "Pengiriman & Pemasangan",
              description:
                "Layanan pengiriman ke seluruh Indonesia dengan pemasangan oleh teknisi ahli",
              icon: Clock,
              features: [
                "Pengiriman gratis area Jabodetabek",
                "Pemasangan profesional",
                "Asuransi barang",
              ],
            },
            {
              title: "Garansi & After Sales",
              description:
                "Garansi produk hingga 2 tahun dengan layanan purna jual terbaik",
              icon: Star,
              features: [
                "Garansi 2 tahun",
                "Service center",
                "Spare part tersedia",
              ],
            },
            {
              title: "Cicilan 0%",
              description:
                "Kemudahan pembayaran dengan cicilan 0% untuk pembelian tertentu",
              icon: ShoppingCart,
              features: [
                "Cicilan 6-12 bulan",
                "Proses cepat",
                "Tanpa kartu kredit",
              ],
            },
            {
              title: "Trade In",
              description: "Tukar tambah furniture lama Anda dengan yang baru",
              icon: Users,
              features: [
                "Evaluasi fair",
                "Potongan harga menarik",
                "Proses mudah",
              ],
            },
          ].map((service, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-cyan-50 to-pink-100 p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6">
                <service.icon className="w-8 h-8 text-amber-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center text-sm text-gray-600"
                  >
                    <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-cyan-50 to-pink-100 p-12 rounded-lg">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Testimoni Pelanggan
            </h2>
            {loading ? (
              <div className="flex justify-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-amber-500"></div>
              </div>
            ) : (
              <div className="grid md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={testimonial.id}
                    className="bg-amber-50 p-6 rounded-lg shadow-md animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="flex justify-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 text-yellow-400 fill-current"
                        />
                      ))}
                    </div>
                    <p className="text-gray-600 mb-4 italic font-bold">
                      "{testimonial.comment}"
                    </p>
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-500 font-semibold">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
