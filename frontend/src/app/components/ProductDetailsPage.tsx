import { ProductDetails } from './ProductDetails';
import { Product } from '../types';

interface ProductDetailsPageProps {
  product: Product;
}

export const ProductDetailsPage = ({ product }: ProductDetailsPageProps) => {
  return (
    <div className="min-h-screen pt-28 pb-24 bg-background">
      <div className="max-w-7xl mx-auto">
        <ProductDetails product={product} />
      </div>
    </div>
  );
};
