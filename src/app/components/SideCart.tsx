import { X, Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { generateWhatsAppLink } from '../utils/whatsapp';

export const SideCart = () => {
  const {
    items,
    cartTotal,
    isCartOpen,
    closeCart,
    updateQuantity,
    removeItem,
  } = useCart();

  const handleCheckout = () => {
    if (items.length === 0) return;
    const whatsappLink = generateWhatsAppLink(items);
    window.open(whatsappLink, '_blank');
  };

  return (
    <>
      {/* Overlay */}
      {isCartOpen && (
        <div
          className="fixed inset-0 bg-black/80 z-50 transition-opacity backdrop-blur-sm"
          onClick={closeCart}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-background border-l border-border/30 z-50 transform transition-transform duration-300 ease-in-out ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-8 border-b border-border/30">
            <h2 className="text-sm font-light tracking-[0.3em] uppercase">
              Carrito
            </h2>
            <button
              onClick={closeCart}
              className="p-2 hover:opacity-70 transition-opacity"
              aria-label="Cerrar carrito"
            >
              <X className="w-4 h-4" strokeWidth={1.5} />
            </button>
          </div>

          {/* Cart Items - Scrollable */}
          <div className="flex-1 overflow-y-auto px-6 py-6">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <p className="text-xs text-muted-foreground tracking-wide uppercase">
                  Tu carrito está vacío
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 pb-6 border-b border-border/30"
                  >
                    {/* Image */}
                    <div className="w-24 h-32 bg-black overflow-hidden">
                      <img
                        src={item.imageUrl}
                        alt={item.name}
                        className="w-full h-full object-cover opacity-90"
                      />
                    </div>

                    {/* Details */}
                    <div className="flex-1 space-y-3">
                      <h3 className="text-xs font-light tracking-wide uppercase">
                        {item.name}
                      </h3>
                      <div className="text-[10px] text-muted-foreground space-y-1 tracking-wider uppercase">
                        <p>Color: {item.color}</p>
                        <p>Talla: {item.size}</p>
                      </div>
                      <p className="text-xs font-light tracking-wider">
                        S/ {item.price.toFixed(2)}
                      </p>

                      {/* Quantity Controls */}
                      <div className="flex items-center justify-between pt-2">
                        <div className="flex items-center gap-3 border border-border/40 px-3 py-1">
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                            className="hover:opacity-70 transition-opacity"
                            aria-label="Disminuir cantidad"
                          >
                            <Minus className="w-3 h-3" strokeWidth={1.5} />
                          </button>
                          <span className="w-6 text-center text-xs font-light">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                            className="hover:opacity-70 transition-opacity"
                            aria-label="Aumentar cantidad"
                          >
                            <Plus className="w-3 h-3" strokeWidth={1.5} />
                          </button>
                        </div>

                        <button
                          onClick={() => removeItem(item.id)}
                          className="hover:opacity-70 text-muted-foreground transition-opacity"
                          aria-label="Eliminar producto"
                        >
                          <Trash2 className="w-3.5 h-3.5" strokeWidth={1.5} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer - Fixed */}
          {items.length > 0 && (
            <div className="border-t border-border/30 px-6 py-8 space-y-6">
              <div className="flex justify-between items-center">
                <span className="text-xs font-light tracking-[0.2em] uppercase text-muted-foreground">
                  Total
                </span>
                <span className="text-lg font-light tracking-wider">
                  S/ {cartTotal.toFixed(2)}
                </span>
              </div>
              <button
                onClick={handleCheckout}
                className="w-full bg-foreground text-background py-4 px-6 text-xs font-medium tracking-[0.2em] uppercase hover:bg-foreground/90 transition-colors"
              >
                Finalizar compra
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
