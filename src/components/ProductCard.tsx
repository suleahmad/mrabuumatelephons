import React from 'react';
import { useCart } from '../context/CartContext';
import './ProductCard.css';

interface ProductCardProps {
  name: string;
  price: string;
  imageColor: string;
  imageUrl?: string;
  specs: string[];
}

const ProductCard: React.FC<ProductCardProps> = ({ name, price, imageColor, imageUrl, specs }) => {
  const { addToCart } = useCart();

  return (
    <div className="product-card glass-panel">
      <div className="product-image" style={{ background: imageColor }}>
        {imageUrl ? (
          <img src={imageUrl} alt={name} className="product-photo" />
        ) : (
          <div className="phone-silhouette"></div>
        )}
      </div>
      <div className="product-info">
        <h3 className="product-name">{name}</h3>
        <p className="product-price">{price}</p>
        <ul className="product-specs">
          {specs.map((spec, index) => (
            <li key={index}>{spec}</li>
          ))}
        </ul>
        <button 
          className="btn-primary w-full"
          onClick={() => addToCart({ name, price, imageUrl })}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
