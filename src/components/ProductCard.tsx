import React from 'react';
import { Star, ShoppingCart, Zap } from 'lucide-react';
import { Product } from '../contexts/CartContext';
import { useCart } from '../contexts/CartContext';
import { toast } from 'sonner';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addItem } = useCart();

  console.log('ProductCard rendered for:', product.name);

  const handleAddToCart = () => {
    if (!product.inStock) {
      toast.error('Este gatito espacial no está disponible');
      return;
    }
    
    addItem(product);
    toast.success(`${product.name} agregado al carrito espacial! 🚀`);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-purple-100">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover"
        />
        
        <div className="absolute top-3 left-3">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
            product.inStock 
              ? 'bg-green-100 text-green-800' 
              : 'bg-red-100 text-red-800'
          }`}>
            {product.inStock ? 'Disponible' : 'Agotado'}
          </span>
        </div>
        
        <div className="absolute top-3 right-3">
          <div className="bg-purple-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
            {product.category}
          </div>
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-bold text-gray-800">{product.name}</h3>
          <div className="flex items-center text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-current" />
            ))}
          </div>
        </div>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-3xl font-bold text-purple-600">
              ${product.price}
            </span>
            <Zap className="h-5 w-5 text-yellow-400 ml-1" />
          </div>
          
          <button
            onClick={handleAddToCart}
            disabled={!product.inStock}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-semibold transition-all ${
              product.inStock
                ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 hover:scale-105'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            <ShoppingCart className="h-4 w-4" />
            <span>{product.inStock ? 'Adoptar' : 'Agotado'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;