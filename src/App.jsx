import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProductsPage from "./pages/ProductsPage";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";

const IndahsariMeubelWebsite = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  const pages = [
    { id: "home", name: "Beranda" },
    { id: "about", name: "Tentang Kami" },
    { id: "products", name: "Produk" },
    { id: "services", name: "Layanan" },
    { id: "contact", name: "Kontak" },
  ];

  useEffect(() => {
    const fetchProducts = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setProducts([
        {
          id: 1,
          name: "Sofa Modern Minimalis",
          price: "Rp 3.500.000",
          image:
            "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=300&h=200&fit=crop&crop=center",
          category: "Sofa",
        },
        {
          id: 2,
          name: "Meja Makan Kayu Jati",
          price: "Rp 2.800.000",
          image:
            "https://images.unsplash.com/photo-1581539250439-c96689b516dd?w=300&h=200&fit=crop&crop=center",
          category: "Meja",
        },
        {
          id: 3,
          name: "Lemari Pakaian 3 Pintu",
          price: "Rp 4.200.000",
          image:
            "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=200&fit=crop&crop=center",
          category: "Lemari",
        },
        {
          id: 4,
          name: "Kursi Kantor Ergonomis",
          price: "Rp 1.500.000",
          image:
            "https://images.unsplash.com/photo-1541558869434-2840d308329a?w=300&h=200&fit=crop&crop=center",
          category: "Kursi",
        },
        {
          id: 5,
          name: "Tempat Tidur Queen Size",
          price: "Rp 5.500.000",
          image:
            "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=300&h=200&fit=crop&crop=center",
          category: "Tempat Tidur",
        },
        {
          id: 6,
          name: "Rak Baju Multifungsi",
          price: "Rp 1.200.000",
          image:
            "https://images.unsplash.com/photo-1731762551219-c544fa4d02a9?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          category: "Rak",
        },
      ]);
    };

    const fetchTestimonials = async () => {
      await new Promise((resolve) => setTimeout(resolve, 800));
      setTestimonials([
        {
          id: 1,
          name: "Aliong",
          rating: 5,
          comment: "Kualitas meubel sangat bagus dan pelayanan memuaskan!",
          location: "Jakarta",
        },
        {
          id: 2,
          name: "Marzuki",
          rating: 5,
          comment: "Desain modern dan harga terjangkau. Sangat recommended!",
          location: "Bandung",
        },
        {
          id: 3,
          name: "Siti Aminah",
          rating: 4,
          comment: "Pengiriman cepat dan barang sesuai ekspektasi.",
          location: "Surabaya",
        },
      ]);
      setLoading(false);
    };

    fetchProducts();
    fetchTestimonials();
  }, []);

  const renderPage = () => {
    const pageProps = {
      products,
      testimonials,
      loading,
      setCurrentPage,
    };

    switch (currentPage) {
      case "home":
        return <HomePage {...pageProps} />;
      case "about":
        return <AboutPage {...pageProps} />;
      case "products":
        return <ProductsPage {...pageProps} />;
      case "services":
        return <ServicesPage {...pageProps} />;
      case "contact":
        return <ContactPage {...pageProps} />;
      default:
        return <HomePage {...pageProps} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        pages={pages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      {renderPage()}
      <Footer />
    </div>
  );
};

export default IndahsariMeubelWebsite;
