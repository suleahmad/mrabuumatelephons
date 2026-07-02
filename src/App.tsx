import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProductCard from './components/ProductCard';
import Footer from './components/Footer';
import './App.css'; // if needed, but we rely on index.css mostly

const App: React.FC = () => {
  const featuredPhones = [
    {
      name: "Google Pixel 8 Pro",
      price: "Tsh 2,800,000",
      imageColor: "transparent",
      imageUrl: "/pixel_8_pro.png",
      specs: ["128GB Storage", "12GB RAM", "50MP Camera", "Tensor G3"]
    },
    {
      name: "Samsung Galaxy S24 Ultra",
      price: "Tsh 3,400,000",
      imageColor: "transparent",
      imageUrl: "/samsung_s24_ultra.png",
      specs: ["512GB Storage", "12GB RAM", "200MP Camera", "Snapdragon 8 Gen 3"]
    },
    {
      name: "iPhone 15 Pro Max",
      price: "Tsh 3,500,000",
      imageColor: "transparent",
      imageUrl: "/iphone_15_pro_max.png",
      specs: ["256GB Storage", "8GB RAM", "48MP Camera", "A17 Pro Chip"]
    },
    {
      name: "Tecno Phantom V Fold",
      price: "Tsh 2,500,000",
      imageColor: "transparent",
      imageUrl: "/tecno_phantom_v_fold.png",
      specs: ["512GB Storage", "12GB RAM", "50MP Camera", "Dimensity 9000+"]
    },
    {
      name: "Tecno Camon 30 Premier",
      price: "Tsh 1,100,000",
      imageColor: "transparent",
      imageUrl: "/tecno_camon_30_premier.png",
      specs: ["512GB Storage", "12GB RAM", "50MP Triple Camera", "Dimensity 8200 Ultimate"]
    }
  ];

  return (
    <>
      <Navbar />
      <HeroSection />
      
      <section className="container section-padding" id="bidhaa">
        <div className="section-header text-center">
          <h2 className="section-title">Bidhaa <span className="text-gradient">Zinazopendwa</span></h2>
          <p className="section-subtitle">Chagua simu yako ya ndoto kutoka kwenye mkusanyiko wetu bora.</p>
        </div>
        
        <div className="products-grid">
          {featuredPhones.map((phone, index) => (
            <div className={`animate-fade-in delay-${(index + 1) * 100}`} key={index}>
              <ProductCard {...phone} />
            </div>
          ))}
        </div>
        
        <div className="text-center mt-3">
          <button className="btn-secondary">Tazama Simu Zote</button>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default App;
