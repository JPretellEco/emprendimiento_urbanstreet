import { useState } from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onNavigate?: (slug: string) => void;
}

export const ProductCard = ({ product, onNavigate }: ProductCardProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleClick = () => {
    if (onNavigate) {
      onNavigate(product.slug);
    } else {
      window.location.href = `/producto/${product.slug}`;
    }
  };

  return (
    <div
      className="group cursor-pointer bg-card"
      onClick={handleClick}
    >
      {/* Image with hover effect */}
      <div
        className="relative aspect-[3/4] overflow-hidden bg-black mb-4"
        onMouseEnter={() => {
          if (product.images.length > 1) {
            setCurrentImageIndex(1);
          }
        }}
        onMouseLeave={() => setCurrentImageIndex(0)}
      >
        <img
          src={product.images[currentImageIndex]}
          alt={product.name}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
        />
      </div>

      {/* Product Info */}
      <div className="space-y-3 px-3 pb-4">
        {/* Name and Colors */}
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-xs font-light tracking-wide leading-tight flex-1 uppercase text-foreground">
            {product.name}
          </h3>
          <div className="flex gap-1.5">
            {product.colors.filter(c => c.available).slice(0, 3).map((color, index) => (
              <div
                key={index}
                className="w-3 h-3 border border-border/30"
                style={{ backgroundColor: color.hex }}
                title={color.name}
              />
            ))}
          </div>
        </div>

        {/* Price and Sizes */}
        <div className="flex items-center justify-between">
          <span className="text-xs font-light tracking-wider text-foreground">
            S/ {product.price.toFixed(2)}
          </span>
          <span className="text-[10px] text-muted-foreground tracking-widest uppercase">
            {product.sizes
              .filter(s => s.available)
              .map(s => s.size)
              .join(' ')}
          </span>
        </div>
      </div>
    </div>
  );
};
