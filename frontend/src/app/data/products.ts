import { Product } from '../types';

export const products: Product[] = [
  // POLOS
  {
    id: '1',
    name: 'NBA x ESSENTIALS FOG',
    category: 'polos',
    price: 350.00,
    slug: 'nba-essentials-fog',
    colors: [
      { name: 'Negro', hex: '#000000', available: true },
      { name: 'Blanco', hex: '#FFFFFF', available: true },
      { name: 'Gris', hex: '#808080', available: true },
    ],
    sizes: [
      { size: 'S', available: true },
      { size: 'M', available: true },
      { size: 'L', available: true },
      { size: 'XL', available: false },
    ],
    images: [
      '/polo_eseentials_nba.png',
      '/POLO_NBA_ESENTIALS_GRIS.png',
      '/nba_polo_2.jpg',
    ],
    description: 'Polo confeccionado en algodón pima de máxima calidad. Corte oversized contemporáneo. Construcción premium con costuras reforzadas. Silueta atemporal.',
  },
  {
    id: '2',
    name: 'Polo Dark Oatmeal',
    category: 'polos',
    price: 380.00,
    slug: 'polo-dark-oatmeal',
    colors: [
      { name: 'Negro', hex: '#000000', available: true },
      { name: 'Blanco', hex: '#FFFFFF', available: true },
      { name: 'Gris', hex: '#808080', available: true },
    ],
    sizes: [
      { size: 'S', available: true },
      { size: 'M', available: true },
      { size: 'L', available: true },
      { size: 'XL', available: true },
    ],
    images: [
      '/dark_oatmeal_polo.png',
      '/DARK_GRINGO.png',
      '/DARK_DETALLE.jpg',
      '/DARK_DETALLE_NEGRO.jpg'
    ],
    description: 'Diseño minimalista con atención meticulosa al detalle. Tejido de peso medio. Acabados de lujo en cada costura. Esencial contemporáneo.',
  },
// AQUIIIIIIIIII AÑADIR MÁS POLOS 
  // SHORTS
  {
    id: '5',
    name: 'Short Dark Oatmeal',
    category: 'shorts',
    price: 280.00,
    slug: 'short-dark-oatmeal',
    colors: [
      { name: 'Rojo', hex: '#a0aca8', available: true },
      { name: 'Negro', hex: '#000000', available: true },
    ],
    sizes: [
      { size: 'S', available: true },
      { size: 'M', available: true },
      { size: 'L', available: true },
      { size: 'XL', available: true },
    ],
    images: [
      '/short_dark_oatmeal.jfif',
      '/short_dark_oatmeal_sentado.jfif',
      '/short_dark_frontal.jpeg',
      '/ultra_detalle_short.jpeg'
    ],
    description: 'Short técnico con estética minimalista. Tejido de alto rendimiento con tecnología de secado rápido. Diseño limpio sin logos visibles.',
  },
// AÑADIR MÁS SHORTS

  // hoodies (T-SHIRTS)
  {
    id: '9',
    name: 'Fear of God Essentials Arched Logo Pullover "Ink',
    category: 'hoodies',
    price: 220.00,
    slug: 'polera-basic-negro',
    colors: [
      { name: 'Negro', hex: '#000000', available: true },
      { name: 'Blanco', hex: '#FFFFFF', available: true },
      { name: 'Gris', hex: '#808080', available: true },
    ],
    sizes: [
      { size: 'S', available: true },
      { size: 'M', available: true },
      { size: 'L', available: true },
      { size: 'XL', available: true },
    ],
    images: [
      '/HODDIE1_1.png',
      '/hooddie1_2.png',
      '/hoddi1_3.png',
      '/hoddi1_4.png'
    ],
    description: 'La esencia del minimalismo. Algodón premium de peso pesado. Construcción sin etiquetas exteriores. Básico perfeccionado.',
  },
  {
    id: '10',
    name: 'Fear of God Essentials Pullover Hoodie Black',
    category: 'hoodies',
    price: 240.00,
    slug: 'polera-street-style',
    colors: [
      { name: 'Blanco', hex: '#FFFFFF', available: true },
      { name: 'Beige', hex: '#F5F5DC', available: true },
    ],
    sizes: [
      { size: 'M', available: true },
      { size: 'L', available: true },
      { size: 'XL', available: false },
    ],
    images: [
      '/hoddi2_1.png',
      '/hoddi2_2.png',
      '/hoddi2_3.png',
      '/hoddie2_4.jpg'
    ],
    description: 'Interpretación contemporánea del básico esencial. Tejido suave al tacto con caída natural. Atención al detalle en cada elemento.',
  },
];

// Helper functions
export const getProductById = (id: string): Product | undefined => {
  return products.find(p => p.id === id);
};

export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find(p => p.slug === slug);
};

export const getProductsByCategory = (category: 'polos' | 'shorts' | 'hoodies'): Product[] => {
  return products.filter(p => p.category === category);
};
