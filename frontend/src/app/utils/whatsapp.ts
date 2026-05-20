import { CartItem } from '../types';

export const generateWhatsAppLink = (cart: CartItem[], phoneNumber: string = '51939895646'): string => {
  const message = formatWhatsAppMessage(cart);
  const encodedMessage = encodeURIComponent(message);
  return `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
};

const formatWhatsAppMessage = (cart: CartItem[]): string => {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  let message = '¡Hola! Me gustaría realizar el siguiente pedido:\n\n';
  message += '┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n';
  message += '*DETALLE DEL PEDIDO*\n';
  message += '┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n';

  cart.forEach((item) => {
    const subtotal = item.price * item.quantity;
    message += `• ${item.quantity}x ${item.name}\n`;
    message += `   - Color: ${item.color}\n`;
    message += `   - Talla: ${item.size}\n`;
    message += `   - Precio u.: S/ ${item.price.toFixed(2)}\n`;
    message += `   - Subtotal: S/ ${subtotal.toFixed(2)}\n\n`;
  });

  message += '┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n';
  message += `*TOTAL A PAGAR:* S/ ${total.toFixed(2)}\n`;
  message += '┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n';
  message += 'Por favor, confirmar la disponibilidad de stock para proceder con la coordinación del pago y envío.';

  return message;
};
