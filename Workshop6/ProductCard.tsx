import React from "react";
import "./ProductCard.css";

type ProductCardProps = {
  imageUrl: string;
  title: string;
  description: string;
  price: number;
  onAddToCart: () => void;
};

const ProductCard: React.FC<ProductCardProps> = ({
  imageUrl,
  title,
  description,
  price,
  onAddToCart,
}) => {
  return (
    <div className="product-card">
      <img src={imageUrl} alt={title} className="product-img" />
      <div className="product-body">
        <h2 className="product-title">{title}</h2>
        <p className="product-description">{description}</p>
        <p className="product-price">฿{price.toFixed(2)}</p>
        <button onClick={onAddToCart} className="btn-add">
          Add to Cart
        </button>
      </div>
    </div>
    
  );
};

export default ProductCard;
