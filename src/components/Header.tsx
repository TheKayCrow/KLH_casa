import { useState, useEffect } from 'react';
import { Menu, X, Home } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/90 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <div className="bg-blue-400 p-2 rounded-lg">
              <Home className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-lg sm:text-xl font-bold text-gray-800">Kolesnikov Little House</h1>
              <p className="text-sm text-gray-600">Prenota Direttamente</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {['home', 'about', 'services', 'gallery', 'location', 'attractions', 'reviews', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-gray-700 hover:text-blue-400 transition-colors duration-200 capitalize font-medium"
              >
                {item === 'home' ? 'Home' : 
                 item === 'about' ? 'Chi Siamo' :
                 item === 'services' ? 'Servizi' :
                 item === 'gallery' ? 'Galleria' :
                 item === 'location' ? 'Posizione' :
                 item === 'attractions' ? 'Dintorni' :
                 item === 'reviews' ? 'Recensioni' :
                 'Contatti'}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col space-y-3">
              {['home', 'about', 'services', 'gallery', 'location', 'attractions', 'reviews', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-left text-gray-700 hover:text-blue-400 transition-colors duration-200 capitalize font-medium py-2"
                >
                  {item === 'home' ? 'Home' : 
                   item === 'about' ? 'Chi Siamo' :
                   item === 'services' ? 'Servizi' :
                   item === 'gallery' ? 'Galleria' :
                   item === 'location' ? 'Posizione' :
                   item === 'attractions' ? 'Dintorni' :
                   item === 'reviews' ? 'Recensioni' :
                   'Contatti'}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;