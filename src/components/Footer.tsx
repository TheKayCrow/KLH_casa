import { Home, Mail, Phone, MapPin, Instagram, Facebook, Heart } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <Home className="w-8 h-8 text-blue-400" />
              <div>
                <h3 className="text-xl sm:text-2xl font-bold">Kolesnikov Little House</h3>
                <p className="text-gray-400">Fiumicino • Roma</p>
              </div>
            </div>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-6 max-w-md">
              La tua casa accogliente sulla costa romana, dove ogni soggiorno diventa 
              un'esperienza indimenticabile tra mare, tradizione e ospitalità italiana.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="bg-gray-700 p-2 sm:p-3 rounded-full hover:bg-blue-400 transition-colors duration-300"
              >
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a 
                href="#" 
                className="bg-gray-700 p-2 sm:p-3 rounded-full hover:bg-blue-400 transition-colors duration-300"
              >
                <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a 
                href="https://wa.me/393281234567"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 p-2 sm:p-3 rounded-full hover:bg-blue-400 transition-colors duration-300"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Link Rapidi</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-sm sm:text-base text-gray-300 hover:text-blue-400 transition-colors duration-200"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-sm sm:text-base text-gray-300 hover:text-blue-400 transition-colors duration-200"
                >
                  Chi Siamo
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-sm sm:text-base text-gray-300 hover:text-blue-400 transition-colors duration-200"
                >
                  Servizi
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-sm sm:text-base text-gray-300 hover:text-blue-400 transition-colors duration-200"
                >
                  Galleria
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-sm sm:text-base text-gray-300 hover:text-blue-400 transition-colors duration-200"
                >
                  Contatti
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Contatti</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm sm:text-base text-gray-300">Via del Faro 39</p>
                  <p className="text-sm sm:text-base text-gray-300">00054 Fiumicino, Roma</p>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <a href="tel:+393281234567" className="text-sm sm:text-base text-gray-300 hover:text-blue-400 transition-colors">
                  +39 328 123 4567
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <a href="mailto:info@kolesnikovlittlehouse.it" className="text-sm sm:text-base text-gray-300 hover:text-blue-400 transition-colors">
                  info@kolesnikovlittlehouse.it
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 sm:mt-12 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400">
              <span className="text-sm sm:text-base">© 2024 Kolesnikov Little House. Realizzato con</span>
              <Heart className="w-4 h-4 text-red-400" />
              <span className="text-sm sm:text-base">a Fiumicino</span>
            </div>
            
            <div className="flex items-center space-x-6">
              <a href="#" className="text-xs sm:text-sm text-gray-400 hover:text-blue-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-xs sm:text-sm text-gray-400 hover:text-blue-400 transition-colors">
                Termini di Servizio
              </a>
              <button
                onClick={scrollToTop}
                className="bg-blue-400 text-white px-3 sm:px-4 py-2 rounded-full hover:bg-blue-500 transition-all duration-300 transform hover:scale-105 text-xs sm:text-sm"
              >
                Torna su
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;