import React, { useState, useMemo } from 'react';
import { Sparkles, Rocket, Mail, Phone, MapPin, Send } from 'lucide-react';
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

      {/* Products Section */}
      <div id="productos" className="container mx-auto px-4 py-8">
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

      {/* Contact Section */}
      <div id="contacto" className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent">
              Contacto Intergaláctico
            </h2>
            <p className="text-xl text-blue-100">
              ¿Listo para adoptar tu compañero espacial? ¡Contáctanos!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="bg-purple-600 p-3 rounded-full">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Email Espacial</h3>
                  <p className="text-blue-200">adopciones@gatitosespaciales.galaxy</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-purple-600 p-3 rounded-full">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Comunicador Cuántico</h3>
                  <p className="text-blue-200">+1-800-SPACE-CAT</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-purple-600 p-3 rounded-full">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Estación Espacial</h3>
                  <p className="text-blue-200">Sector 7G, Vía Láctea<br />Cerca de Júpiter</p>
                </div>
              </div>

              <div className="bg-purple-800 bg-opacity-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Horarios de Atención</h3>
                <div className="space-y-2 text-blue-200">
                  <p>Lunes - Viernes: 9:00 - 18:00 (Hora Galáctica)</p>
                  <p>Sábados: 10:00 - 16:00 (Hora Galáctica)</p>
                  <p>Domingos: Cerrado (Día de descanso universal)</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6">Envíanos un Mensaje</h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Nombre Completo</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white bg-opacity-20 border border-purple-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-white placeholder-blue-200"
                    placeholder="Tu nombre espacial"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-white bg-opacity-20 border border-purple-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-white placeholder-blue-200"
                    placeholder="tu@email.galaxy"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Planeta de Origen</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white bg-opacity-20 border border-purple-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-white placeholder-blue-200"
                    placeholder="Tierra, Marte, etc."
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Mensaje</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-white bg-opacity-20 border border-purple-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-white placeholder-blue-200 resize-none"
                    placeholder="Cuéntanos sobre tu misión espacial y qué tipo de gatito buscas..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-yellow-400 to-pink-500 text-purple-900 py-3 rounded-lg font-bold hover:from-yellow-500 hover:to-pink-600 transition-all flex items-center justify-center space-x-2"
                >
                  <Send className="h-5 w-5" />
                  <span>Enviar Mensaje Espacial</span>
                </button>
              </form>
            </div>
          </div>
        </div>
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
      </div>
    </div>
  );
};

export default SpaceKittenStore;