import { ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const Navbar = () => {
  const { totalItems, openCart } = useCart();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="hover:opacity-70 transition-opacity">
            <img
              src="/logo-removebg-preview.png"
              alt="URBAN STREET"
              className="h-35 w-auto"
            />
          </a>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-12">
            <a
              href="/polos"
              className="text-xs font-medium tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors relative group uppercase"
            >
              Polos
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-foreground transition-all group-hover:w-full" />
            </a>
            <a
              href="/shorts"
              className="text-xs font-medium tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors relative group uppercase"
            >
              Shorts
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-foreground transition-all group-hover:w-full" />
            </a>
            <a
              href="/hoodies"
              className="text-xs font-medium tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors relative group uppercase"
            >
              Hoodies
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-foreground transition-all group-hover:w-full" />
            </a>
            <a
              href="/contacto"
              className="text-xs font-medium tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors relative group uppercase"
            >
              Contacto
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-foreground transition-all group-hover:w-full" />
            </a>
          </div>

          {/* Cart Icon */}
          <button
            onClick={openCart}
            className="relative p-2 hover:opacity-70 transition-opacity"
            aria-label="Abrir carrito"
          >
            <ShoppingBag className="w-5 h-5 text-foreground" strokeWidth={1.5} />
            {totalItems > 0 && (
              <span className="absolute -top-0.5 -right-0.5 bg-foreground text-background text-[10px] font-medium w-4 h-4 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};
