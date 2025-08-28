import { Product } from '../contexts/CartContext';

export const spaceKittens: Product[] = [
  {
    id: '1',
    name: 'Luna Cósmica',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400&h=400&fit=crop',
    description: 'Un adorable gatito con pelaje plateado que brilla como las estrellas. Perfecto para explorar galaxias lejanas.',
    category: 'Exploradores',
    inStock: true
  },
  {
    id: '2',
    name: 'Nebulosa Naranja',
    price: 349.99,
    image: 'https://images.unsplash.com/photo-1592194996308-7b43878e84a6?w=400&h=400&fit=crop',
    description: 'Este gatito espacial tiene un pelaje que cambia de color como las nebulosas. Ideal para misiones interplanetarias.',
    category: 'Navegadores',
    inStock: true
  },
  {
    id: '3',
    name: 'Estrella Polar',
    price: 399.99,
    image: 'https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?w=400&h=400&fit=crop',
    description: 'Un gatito blanco puro con ojos azules como el hielo espacial. Excelente para navegación estelar.',
    category: 'Navegadores',
    inStock: true
  },
  {
    id: '4',
    name: 'Cometa Veloz',
    price: 279.99,
    image: 'https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=400&h=400&fit=crop',
    description: 'El gatito más rápido de la galaxia. Su cola deja un rastro de estrellas cuando corre.',
    category: 'Velocistas',
    inStock: true
  },
  {
    id: '5',
    name: 'Galaxia Violeta',
    price: 429.99,
    image: 'https://images.unsplash.com/photo-1571566882372-1598d88abd90?w=400&h=400&fit=crop',
    description: 'Un gatito místico con poderes telepáticos. Puede comunicarse a través del espacio-tiempo.',
    category: 'Místicos',
    inStock: true
  },
  {
    id: '6',
    name: 'Meteorito Dorado',
    price: 499.99,
    image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400&h=400&fit=crop',
    description: 'Un gatito legendario con pelaje dorado que brilla con la luz de mil soles.',
    category: 'Legendarios',
    inStock: false
  },
  {
    id: '7',
    name: 'Satélite Gris',
    price: 259.99,
    image: 'https://images.unsplash.com/photo-1606214174585-fe31582dc6ee?w=400&h=400&fit=crop',
    description: 'Especialista en comunicaciones espaciales. Puede detectar señales de vida en planetas lejanos.',
    category: 'Comunicadores',
    inStock: true
  },
  {
    id: '8',
    name: 'Aurora Boreal',
    price: 379.99,
    image: 'https://images.unsplash.com/photo-1615789591457-74a63395c990?w=400&h=400&fit=crop',
    description: 'Un gatito mágico que puede crear auroras boreales con su ronroneo. Perfecto para decorar naves espaciales.',
    category: 'Místicos',
    inStock: true
  }
];

export const categories = ['Todos', 'Exploradores', 'Navegadores', 'Velocistas', 'Místicos', 'Legendarios', 'Comunicadores'];