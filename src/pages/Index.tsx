import React from 'react';
import { CartProvider } from '../contexts/CartContext';
import Navbar from '../components/Navbar';
import SpaceKittenStore from '../components/SpaceKittenStore';

const Index = () => {
  console.log('Index page rendered');
  
  return (
    <CartProvider>
      <div className="min-h-screen">
        <Navbar />
        <SpaceKittenStore />
      </div>
    </CartProvider>
  );
};

export default Index;