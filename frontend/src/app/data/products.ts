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
      'frontend\polo_eseentials_nba.jfif',
      'frontend\POLO_NBA_ESENTIALS_GRIS.png',
      'frontend\nba_polo_2.jpg',
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
    name: 'Polera Basic Negro',
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
      'https://images.unsplash.com/photo-1552571072-0eadf8e3953c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      'https://images.unsplash.com/photo-1595188525947-4ba148279529?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    ],
    description: 'La esencia del minimalismo. Algodón premium de peso pesado. Construcción sin etiquetas exteriores. Básico perfeccionado.',
  },
  {
    id: '10',
    name: 'Polera Street Style',
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
      'https://images.unsplash.com/photo-1595188525947-4ba148279529?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      'https://images.unsplash.com/photo-1759596450534-0a960be607e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    ],
    description: 'Interpretación contemporánea del básico esencial. Tejido suave al tacto con caída natural. Atención al detalle en cada elemento.',
  },
  {
    id: '11',
    name: 'Polera Premium',
    category: 'hoodies',
    price: 260.00,
    slug: 'polera-premium',
    colors: [
      { name: 'Azul', hex: '#4169E1', available: true },
      { name: 'Verde', hex: '#90EE90', available: true },
    ],
    sizes: [
      { size: 'S', available: true },
      { size: 'M', available: true },
      { size: 'L', available: true },
    ],
    images: [
      'https://images.unsplash.com/photo-1740711152088-88a009e877bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      'https://images.unsplash.com/photo-1777793299588-8055f47cd20e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    ],
    description: 'Diseño limpio con materiales excepcionales. Corte refinado oversized. Calidad superior en cada puntada. Lujo silencioso.',
  },
  {
    id: '12',
    name: 'Polera Summer',
    category: 'hoodies',
    price: 230.00,
    slug: 'polera-summer',
    colors: [
      { name: 'Beige', hex: '#F5F5DC', available: true },
      { name: 'Blanco', hex: '#FFFFFF', available: true },
    ],
    sizes: [
      { size: 'M', available: true },
      { size: 'L', available: true },
      { size: 'XL', available: true },
    ],
    images: [
      'https://images.unsplash.com/photo-1778530207696-ea08486320d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      'https://images.unsplash.com/photo-1778530207547-04ad4aa9632a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    ],
    description: 'Ligereza y calidad en perfecta armonía. Tejido transpirable de verano. Silueta relajada con proporción estudiada. Simplicidad refinada.',
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
