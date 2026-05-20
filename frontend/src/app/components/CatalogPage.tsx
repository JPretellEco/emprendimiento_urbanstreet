import { ProductCard } from './ProductCard';
import { Product } from '../types';

interface CatalogPageProps {
  title: string;
  products: Product[];
}

export const CatalogPage = ({ title, products }: CatalogPageProps) => {
  return (
    <div className="min-h-screen pt-32 pb-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-3xl md:text-4xl font-light tracking-[0.3em] mb-6 uppercase">
            {title}
          </h1>
          <p className="text-xs text-muted-foreground tracking-[0.2em] uppercase">
            {products.length} piezas disponibles
          </p>
        </div>

        {/* Products Grid - 4 columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};
