import React from 'react';
import { ShoppingCart, Rocket, Star } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import CartDrawer from './CartDrawer';

const Navbar = () => {
  const { state } = useCart();
  const [isCartOpen, setIsCartOpen] = React.useState(false);

  console.log('Navbar rendered, cart items:', state.items.length);

  return (
    <>
      <nav className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Rocket className="h-8 w-8 text-yellow-400" />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent">
                Gatitos Espaciales
              </h1>
              <Star className="h-6 w-6 text-yellow-400 animate-pulse" />
            </div>
            
            <div className="flex items-center space-x-6">
              <nav className="hidden md:flex space-x-6">
                <a href="#" className="hover:text-yellow-400 transition-colors">Inicio</a>
                <a href="#" className="hover:text-yellow-400 transition-colors">Productos</a>
                <a href="#" className="hover:text-yellow-400 transition-colors">Sobre Nosotros</a>
                <a href="#" className="hover:text-yellow-400 transition-colors">Contacto</a>
              </nav>
              
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 bg-purple-700 hover:bg-purple-600 rounded-full transition-colors"
              >
                <ShoppingCart className="h-6 w-6" />
                {state.items.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center font-bold">
                    {state.items.reduce((sum, item) => sum + item.quantity, 0)}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>
      
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export default Navbar;