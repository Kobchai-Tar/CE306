import React from "react";
import Navbar from "./Navbar";
import ProductCard from "./ProductCard";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="app-container">
      <Navbar />

       {/*<div className="product-grid">
        <ProductCard
          imageUrl="https://media-cdn.bnn.in.th/411325/microsoft-surface-laptop-7-13inpls16512-win11-sc-thai-graphite-zgm-1-square_medium.jpg"
          title="Laptop"
          description="Powerful laptop for your work and play."
          price={35000}
          onAddToCart={() => alert("Laptop added to cart!")}
        />
        <ProductCard
          imageUrl="https://www.istudio.store/cdn/shop/files/SonyWH-1000XM5WirelessHeadphone.014.jpg?v=1733888177&width=1445"
          title="Headphones"
          description="High quality sound, wireless freedom."
          price={2500}
          onAddToCart={() => alert("Headphones added to cart!")}
        />
        <ProductCard
          imageUrl="https://m.media-amazon.com/images/I/61aiFCe6PpL.jpg"
          title="Smartphone"
          description="Latest smartphone with amazing features."
          price={22000}
          onAddToCart={() => alert("Smartphone added to cart!")}
          
        />
      </div>*/}
    </div>
  );
};

export default App;