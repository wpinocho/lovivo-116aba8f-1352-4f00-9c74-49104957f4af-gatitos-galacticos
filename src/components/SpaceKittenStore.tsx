import React, { useState, useMemo } from 'react';
import { Sparkles, Rocket } from 'lucide-react';
import ProductCard from './ProductCard';
import ProductFilters from './ProductFilters';
import { spaceKittens } from '../data/products';

const SpaceKittenStore = () => {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name');

  console.log('SpaceKittenStore rendered with filters:', { selectedCategory, searchTerm, sortBy });

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = spaceKittens;

    // Filtrar por categoría
    if (selectedCategory !== 'Todos') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Filtrar por búsqueda
    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Ordenar
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'category':
        filtered.sort((a, b) => a.category.localeCompare(b.category));
        break;
      default:
        filtered.sort((a, b) => a.name.localeCompare(b.name));
    }

    console.log('Filtered products:', filtered.length);
    return filtered;
  }, [selectedCategory, searchTerm, sortBy]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="h-8 w-8 text-yellow-400 mr-2" />
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent">
              Gatitos Espaciales
            </h1>
            <Sparkles className="h-8 w-8 text-yellow-400 ml-2" />
          </div>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Los compañeros perfectos para tus aventuras intergalácticas
          </p>
          <div className="flex items-center justify-center">
            <Rocket className="h-6 w-6 text-yellow-400 mr-2 animate-bounce" />
            <span className="text-lg">¡Adopta tu gatito espacial hoy!</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <ProductFilters
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          sortBy={sortBy}
          onSortChange={setSortBy}
        />

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredAndSortedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredAndSortedProducts.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🚀</div>
            <h3 className="text-2xl font-bold text-gray-700 mb-2">
              No se encontraron gatitos espaciales
            </h3>
            <p className="text-gray-500">
              Intenta ajustar tus filtros de búsqueda
            </p>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-4">
            <Rocket className="h-6 w-6 text-yellow-400 mr-2" />
            <span className="text-lg font-semibold">Gatitos Espaciales</span>
          </div>
          <p className="text-blue-200">
            © 2024 Gatitos Espaciales. Todos los derechos reservados en toda la galaxia.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default SpaceKittenStore;