import React from 'react';
import { Rocket, Star, Heart, Users, Zap, Globe } from 'lucide-react';
import Navbar from '../components/Navbar';
import { CartProvider } from '../contexts/CartContext';

const AboutUs = () => {
  console.log('AboutUs page rendered');

  return (
    <CartProvider>
      <div className="min-h-screen">
        <Navbar />
        
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
          {/* Hero Section */}
          <div className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-20">
            <div className="container mx-auto px-4 text-center">
              <div className="flex items-center justify-center mb-6">
                <Star className="h-8 w-8 text-yellow-400 mr-3 animate-pulse" />
                <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent">
                  Sobre Nosotros
                </h1>
                <Star className="h-8 w-8 text-yellow-400 ml-3 animate-pulse" />
              </div>
              <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
                Somos pioneros en la adopción de compañeros felinos para aventuras intergalácticas
              </p>
              <div className="flex items-center justify-center">
                <Rocket className="h-6 w-6 text-yellow-400 mr-2 animate-bounce" />
                <span className="text-lg">Conectando corazones a través del universo</span>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="container mx-auto px-4 py-16">
            {/* Our Story */}
            <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Nuestra Historia</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full"></div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    Todo comenzó en el año 2089, cuando nuestro fundador, el Dr. Miau Espacial, 
                    descubrió que los gatitos tenían habilidades extraordinarias para la navegación 
                    intergaláctica. Su ronroneo podía sintonizar frecuencias cósmicas y sus bigotes 
                    detectaban campos gravitacionales.
                  </p>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Desde entonces, hemos dedicado nuestra misión a entrenar y preparar a estos 
                    increíbles compañeros felinos para acompañar a exploradores espaciales en 
                    sus aventuras por toda la galaxia.
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl p-8">
                    <Rocket className="h-24 w-24 text-purple-600 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Desde 2089</h3>
                    <p className="text-gray-600">Pioneros en adopción espacial</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Our Values */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                <div className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Amor Incondicional</h3>
                <p className="text-gray-600">
                  Cada gatito espacial es criado con amor y cuidado, preparándolos para formar 
                  vínculos eternos con sus compañeros humanos.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Tecnología Avanzada</h3>
                <p className="text-gray-600">
                  Utilizamos la tecnología más avanzada del universo para entrenar y equipar 
                  a nuestros gatitos con habilidades espaciales únicas.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Exploración Universal</h3>
                <p className="text-gray-600">
                  Fomentamos la exploración responsable del universo, siempre respetando 
                  las diferentes formas de vida que encontramos.
                </p>
              </div>
            </div>

            {/* Team Section */}
            <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Nuestro Equipo</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full"></div>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-gradient-to-br from-purple-400 to-blue-500 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4">
                    <Users className="h-12 w-12 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Dr. Miau Espacial</h3>
                  <p className="text-purple-600 font-semibold mb-2">Fundador & CEO</p>
                  <p className="text-gray-600 text-sm">
                    Pionero en comunicación felina intergaláctica con más de 50 años de experiencia.
                  </p>
                </div>

                <div className="text-center">
                  <div className="bg-gradient-to-br from-pink-400 to-purple-500 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4">
                    <Star className="h-12 w-12 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Luna Cósmica</h3>
                  <p className="text-purple-600 font-semibold mb-2">Directora de Entrenamiento</p>
                  <p className="text-gray-600 text-sm">
                    Ex-gatita espacial convertida en experta entrenadora de nuevas generaciones.
                  </p>
                </div>

                <div className="text-center">
                  <div className="bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4">
                    <Rocket className="h-12 w-12 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Capitán Bigotes</h3>
                  <p className="text-purple-600 font-semibold mb-2">Jefe de Misiones</p>
                  <p className="text-gray-600 text-sm">
                    Veterano de 1000 misiones espaciales, especialista en navegación galáctica.
                  </p>
                </div>
              </div>
            </div>

            {/* Stats Section */}
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl text-white p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">Nuestros Logros</h2>
                <p className="text-blue-100 text-lg">Números que nos enorgullecen</p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-yellow-400 mb-2">10,000+</div>
                  <p className="text-blue-100">Gatitos Adoptados</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-yellow-400 mb-2">500+</div>
                  <p className="text-blue-100">Planetas Visitados</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-yellow-400 mb-2">99.9%</div>
                  <p className="text-blue-100">Satisfacción</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-yellow-400 mb-2">24/7</div>
                  <p className="text-blue-100">Soporte Galáctico</p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <footer className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-8">
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
      </div>
    </CartProvider>
  );
};

export default AboutUs;