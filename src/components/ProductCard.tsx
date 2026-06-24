import React from 'react';
import './ProductCard.css';

interface ProductCardProps {
  name: string;
  price: string;
  imageColor: string;
  specs: string[];
}

const ProductCard: React.FC<ProductCardProps> = ({ name, price, imageColor, specs }) => {
  return (
    <div className="product-card glass-panel">
      <div className="product-image" style={{ background: imageColor }}>
        <div className="phone-silhouette"></div>
      </div>
      <div className="product-info">
        <h3 className="product-name">{name}</h3>
        <p className="product-price">{price}</p>
        <ul className="product-specs">
          {specs.map((spec, index) => (
            <li key={index}>{spec}</li>
          ))}
        </ul>
        <button className="btn-primary w-full">Ongeza Kikapuni</button>
      </div>
    </div>
  );
};

export default ProductCard;
