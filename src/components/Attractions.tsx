import { Camera, Utensils, Waves, Clock, MapPin, Star } from 'lucide-react';

const Attractions = () => {
  const attractions = [
    {
      icon: <Waves className="w-8 h-8" />,
      title: "Spiagge di Fiumicino",
      description: "Spiagge sabbiose con stabilimenti balneari e zone libere",
      distance: "2 min a piedi",
      rating: 4.5,
      image: "https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      icon: <Utensils className="w-8 h-8" />,
      title: "Ristoranti di Pesce",
      description: "Tradizionali osterie e ristoranti con pesce freschissimo",
      distance: "5 min a piedi",
      rating: 4.8,
      image: "https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Ostia Antica",
      description: "Sito archeologico con anfiteatro e mosaici romani",
      distance: "15 min in auto",
      rating: 4.7,
      image: "https://images.pexels.com/photos/2064827/pexels-photo-2064827.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Porto di Fiumicino",
      description: "Caratteristico porto peschereccio con mercato del pesce",
      distance: "8 min a piedi",
      rating: 4.4,
      image: "https://images.pexels.com/photos/1462935/pexels-photo-1462935.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  const restaurants = [
    {
      name: "Il Tino",
      specialty: "Crudo di ricciola",
      distance: "3 min",
      rating: 4.9
    },
    {
      name: "Bastianelli al Molo",
      specialty: "Spaghetti alle vongole",
      distance: "5 min",
      rating: 4.7
    },
    {
      name: "Perla Marina",
      specialty: "Frittura di paranza",
      distance: "4 min",
      rating: 4.6
    },
    {
      name: "La Marinella",
      specialty: "Branzino in crosta",
      distance: "6 min",
      rating: 4.8
    }
  ];

  return (
    <section id="attractions" className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-green-400 uppercase tracking-wide">Dintorni</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mt-4 mb-6">
            Cosa vedere e fare
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Fiumicino offre il perfetto equilibrio tra relax marino, cultura e tradizione culinaria. 
            Ecco le nostre raccomandazioni per vivere al meglio il territorio.
          </p>
        </div>

        {/* Main Attractions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
          {attractions.map((attraction, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-40 sm:h-48">
                <img 
                  src={attraction.image}
                  alt={attraction.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                  <div className="text-blue-400">
                    {attraction.icon}
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-xs sm:text-sm font-semibold">{attraction.rating}</span>
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">
                  {attraction.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {attraction.description}
                </p>
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <Clock className="w-4 h-4" />
                  <span>{attraction.distance}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Restaurant Recommendations */}
        <div className="bg-gradient-to-r from-blue-400 to-green-400 rounded-3xl p-8 md:p-12 text-white">
          <div className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              I migliori ristoranti di pesce
            </h3>
            <p className="text-lg sm:text-xl text-white/90">
              Scopri i sapori autentici della cucina marinara di Fiumicino
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {restaurants.map((restaurant, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 hover:bg-white/20 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-base sm:text-lg font-semibold">{restaurant.name}</h4>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-yellow-300 text-yellow-300" />
                    <span className="text-sm">{restaurant.rating}</span>
                  </div>
                </div>
                <p className="text-white/80 text-sm mb-3">{restaurant.specialty}</p>
                <div className="flex items-center space-x-2 text-sm text-white/70">
                  <MapPin className="w-4 h-4" />
                  <span>{restaurant.distance} a piedi</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Attractions;