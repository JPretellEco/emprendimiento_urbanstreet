import { useState } from 'react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';
import { toast } from 'sonner';

interface ProductDetailsProps {
  product: Product;
}

export const ProductDetails = ({ product }: ProductDetailsProps) => {
  const [selectedColor, setSelectedColor] = useState(
    product.colors.find(c => c.available)?.name || ''
  );
  const [selectedSize, setSelectedSize] = useState('');
  const { addItem, openCart } = useCart();

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast.error('Por favor selecciona una talla');
      return;
    }

    if (!selectedColor) {
      toast.error('Por favor selecciona un color');
      return;
    }

    addItem({
      productId: product.id,
      name: product.name,
      price: product.price,
      color: selectedColor,
      size: selectedSize,
      quantity: 1,
      imageUrl: product.images[0],
    });

    toast.success('Producto añadido al carrito');
    openCart();
  };

  const categoryMap = {
    polos: 'Polos',
    shorts: 'Shorts',
    hoodies: 'hoodies',
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-0 md:gap-16 bg-background">
      {/* Left Column: Images Gallery */}
      <div className="md:col-span-7 space-y-0">
        {product.images.map((image, index) => (
          <div key={index} className="relative overflow-hidden bg-black">
            <img
              src={image}
              alt={`${product.name} - Vista ${index + 1}`}
              className="w-full object-cover opacity-90"
            />
          </div>
        ))}
      </div>

      {/* Right Column: Purchase Info - Sticky */}
      <div className="md:col-span-5 px-6 md:px-0">
        <div className="md:sticky md:top-28 space-y-8 py-8">
          {/* Breadcrumb */}
          <div className="text-[10px] text-muted-foreground tracking-[0.2em] uppercase">
            {categoryMap[product.category]} / {product.name}
          </div>

          {/* Product Name */}
          <h1 className="text-2xl md:text-3xl font-light tracking-[0.2em] uppercase">
            {product.name}
          </h1>

          {/* Price */}
          <div className="text-xl font-light tracking-wider">
            S/ {product.price.toFixed(2)}
          </div>

          {/* Color Selection */}
          <div className="space-y-4">
            <label className="block text-xs font-light tracking-[0.2em] uppercase text-muted-foreground">
              Color
            </label>
            <div className="flex flex-wrap gap-3">
              {product.colors.map((color) => (
                <button
                  key={color.name}
                  onClick={() => color.available && setSelectedColor(color.name)}
                  disabled={!color.available}
                  className={`w-10 h-10 border transition-all ${
                    selectedColor === color.name
                      ? 'border-foreground scale-105'
                      : 'border-border/40'
                  } ${!color.available ? 'opacity-30 cursor-not-allowed' : 'hover:border-foreground/60'}`}
                  style={{ backgroundColor: color.hex }}
                  title={color.name}
                  aria-label={`Seleccionar color ${color.name}`}
                />
              ))}
            </div>
          </div>

          {/* Size Selection */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <label className="block text-xs font-light tracking-[0.2em] uppercase text-muted-foreground">
                Talla
              </label>
              <a
                href="/guia-de-tallas.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] tracking-wider uppercase text-muted-foreground hover:text-foreground transition-colors"
              >
                Guía de tallas
              </a>
            </div>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((sizeOption) => (
                <button
                  key={sizeOption.size}
                  onClick={() => sizeOption.available && setSelectedSize(sizeOption.size)}
                  disabled={!sizeOption.available}
                  className={`px-5 py-2.5 border text-xs tracking-widest transition-all ${
                    selectedSize === sizeOption.size
                      ? 'bg-foreground text-background border-foreground'
                      : 'bg-transparent text-foreground border-border/40 hover:border-foreground'
                  } ${
                    !sizeOption.available
                      ? 'opacity-30 cursor-not-allowed line-through'
                      : ''
                  }`}
                >
                  {sizeOption.size}
                </button>
              ))}
            </div>
          </div>

          {/* Description */}
          <div className="space-y-3 pt-4 border-t border-border/30">
            <h3 className="text-xs font-light tracking-[0.2em] uppercase text-muted-foreground">
              Detalles
            </h3>
            <p className="text-xs text-muted-foreground/80 leading-relaxed tracking-wide">
              {product.description}
            </p>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className="w-full bg-foreground text-background py-4 px-6 text-xs font-medium tracking-[0.2em] uppercase hover:bg-foreground/90 transition-colors"
          >
            Añadir al carrito
          </button>
        </div>
      </div>
    </div>
  );
};