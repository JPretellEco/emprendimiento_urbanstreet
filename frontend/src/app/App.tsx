import { useState, useEffect } from 'react';
import { CartProvider } from './context/CartContext';
import { Toaster } from 'sonner';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { SideCart } from './components/SideCart';
import { AIAssistant } from './components/AIAssistant';
import { Home } from './components/Home';
import { CatalogPage } from './components/CatalogPage';
import { ProductDetailsPage } from './components/ProductDetailsPage';
import { products, getProductsByCategory, getProductBySlug } from './data/products';

type Page =
  | { type: 'home' }
  | { type: 'catalog'; category: 'polos' | 'shorts' | 'hoodies' }
  | { type: 'product'; slug: string }
  | { type: 'contact' };

function AppContent() {
  const [currentPage, setCurrentPage] = useState<Page>({ type: 'home' });

  useEffect(() => {
    const handleNavigation = () => {
      const path = window.location.pathname;

      if (path === '/' || path === '') {
        setCurrentPage({ type: 'home' });
      } else if (path === '/polos') {
        setCurrentPage({ type: 'catalog', category: 'polos' });
      } else if (path === '/shorts') {
        setCurrentPage({ type: 'catalog', category: 'shorts' });
      } else if (path === '/hoodies') {
        setCurrentPage({ type: 'catalog', category: 'hoodies' });
      } else if (path.startsWith('/producto/')) {
        const slug = path.replace('/producto/', '');
        setCurrentPage({ type: 'product', slug });
      } else if (path === '/contacto') {
        setCurrentPage({ type: 'contact' });
      }
    };

    handleNavigation();

    // Listen for popstate events (browser back/forward)
    window.addEventListener('popstate', handleNavigation);
    return () => window.removeEventListener('popstate', handleNavigation);
  }, []);

  // Navigate function
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');

      if (anchor && anchor.href && anchor.href.startsWith(window.location.origin)) {
        e.preventDefault();
        const newPath = anchor.pathname;
        window.history.pushState({}, '', newPath);
        window.dispatchEvent(new PopStateEvent('popstate'));
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  const renderPage = () => {
    switch (currentPage.type) {
      case 'home':
        return <Home />;

      case 'catalog':
        const categoryProducts = getProductsByCategory(currentPage.category);
        const categoryTitles = {
          polos: 'Polos',
          shorts: 'Shorts',
          hoodies: 'hoodies',
        };
        return (
          <CatalogPage
            title={categoryTitles[currentPage.category]}
            products={categoryProducts}
          />
        );

      case 'product':
        const product = getProductBySlug(currentPage.slug);
        if (!product) {
          return (
            <div className="min-h-screen pt-32 flex items-center justify-center bg-background">
              <div className="text-center px-6">
                <h1 className="text-xl font-light tracking-[0.2em] uppercase mb-6 text-foreground">
                  Producto no encontrado
                </h1>
                <a
                  href="/"
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors tracking-wider uppercase"
                >
                  Volver al inicio
                </a>
              </div>
            </div>
          );
        }
        return <ProductDetailsPage product={product} />;

      case 'contact':
        return (
          <div className="min-h-screen pt-32 pb-24 bg-background">
            <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12">
              <h1 className="text-3xl md:text-4xl font-light tracking-[0.3em] mb-8 uppercase">
                Contacto
              </h1>
              <p className="text-xs text-muted-foreground mb-12 tracking-wide leading-relaxed">
                Para consultas sobre productos, pedidos o asesoría de estilo, contáctanos a través de los siguientes canales.
              </p>
              <div className="space-y-8">
                <div className="pb-8 border-b border-border/30">
                  <h3 className="text-xs font-light tracking-[0.2em] uppercase text-muted-foreground mb-3">
                    WhatsApp
                  </h3>
                  <a
                    href="https://wa.me/51939895646"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-foreground hover:opacity-70 transition-opacity tracking-wide"
                  >
                    +51 939 895 646
                  </a>
                </div>
                <div className="pb-8 border-b border-border/30">
                  <h3 className="text-xs font-light tracking-[0.2em] uppercase text-muted-foreground mb-3">
                    Email
                  </h3>
                  <a
                    href="mailto:info@urbanstreet.com"
                    className="text-sm text-foreground hover:opacity-70 transition-opacity tracking-wide"
                  >
                    info@urbanstreet.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {renderPage()}
      </main>
      <Footer />
      <SideCart />
      <AIAssistant />
      <Toaster position="top-center" richColors />
    </div>
  );
}

export default function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}