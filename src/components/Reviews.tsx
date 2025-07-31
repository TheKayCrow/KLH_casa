import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, User } from 'lucide-react';

const Reviews = () => {
  const [currentReview, setCurrentReview] = useState(0);

  const reviews = [
    {
      name: "Marco & Elena",
      country: "Milano, Italia",
      rating: 5,
      date: "Ottobre 2024",
      text: "Posizione perfetta per visitare Roma rimanendo vicini al mare. La casa è esattamente come nelle foto, pulitissima e dotata di tutto. I proprietari sono stati fantastici, sempre disponibili per consigli sui ristoranti migliori. Torneremo sicuramente!",
      avatar: "https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=face"
    },
    {
      name: "Sarah Johnson",
      country: "London, UK",
      rating: 5,
      date: "Settembre 2024",
      text: "Amazing location just steps from the beach and so convenient for the airport. The apartment is beautifully furnished and has everything you need. The hosts gave us excellent restaurant recommendations. Perfect base for exploring Rome and enjoying the coast!",
      avatar: "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=face"
    },
    {
      name: "Hans & Greta",
      country: "Berlin, Germany",
      rating: 5,
      date: "Agosto 2024",
      text: "Wunderbare Lage direkt am Meer! Die Wohnung ist sehr sauber und komfortabel. Wir konnten jeden Morgen am Strand spazieren gehen und abends die fantastischen Fischrestaurants besuchen. Die Gastgeber waren sehr hilfsbereit. Sehr empfehlenswert!",
      avatar: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=face"
    },
    {
      name: "Antonio & Carmen",
      country: "Barcelona, España",
      rating: 5,
      date: "Luglio 2024",
      text: "¡Perfecto para unas vacaciones relajantes! La casa está a pocos pasos de la playa y muy cerca del aeropuerto. Todo estaba impecable y los anfitriones fueron muy atentos. Los restaurantes de pescado de la zona son increíbles. ¡Volveremos sin duda!",
      avatar: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=face"
    },
    {
      name: "Julie & Pierre",
      country: "Paris, France",
      rating: 5,
      date: "Giugno 2024",
      text: "Emplacement idéal pour découvrir Rome tout en profitant de la mer. L'appartement est parfaitement équipé et très propre. Les hôtes nous ont donné d'excellents conseils pour les restaurants. La plage est à 2 minutes à pied. Parfait pour des vacances reposantes!",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=face"
    },
    {
      name: "Lisa & Tom",
      country: "New York, USA",
      rating: 5,
      date: "Maggio 2024",
      text: "This place exceeded our expectations! Perfect location between Rome and the beach. The apartment is spotless and has amazing amenities. The hosts were incredibly welcoming and helped us discover the best local seafood spots. Can't wait to return!",
      avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=face"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [reviews.length]);

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  return (
    <section id="reviews" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-yellow-500 uppercase tracking-wide">Recensioni</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mt-4 mb-6">
            Cosa dicono i nostri ospiti
          </h2>
          <div className="flex items-center justify-center space-x-2 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
            ))}
            <span className="text-xl sm:text-2xl font-bold text-gray-800 ml-2">4.9/5</span>
            <span className="text-sm sm:text-base text-gray-600 ml-2">da ospiti verificati</span>
          </div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-stone-50 rounded-3xl p-6 sm:p-8 md:p-12 relative overflow-hidden">
            <div className="relative z-10">
              <div className="flex items-center space-x-4 mb-6">
                {reviews[currentReview].avatar ? (
                  <img 
                    src={reviews[currentReview].avatar}
                    alt={reviews[currentReview].name}
                    className="w-12 sm:w-16 h-12 sm:h-16 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-12 sm:w-16 h-12 sm:h-16 rounded-full bg-gray-200 flex items-center justify-center">
                    <User className="w-8 h-8 text-gray-500" />
                  </div>
                )}
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                    {reviews[currentReview].name}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600">{reviews[currentReview].country}</p>
                  <div className="flex items-center space-x-2 mt-1">
                    <div className="flex space-x-1">
                      {[...Array(reviews[currentReview].rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="text-sm text-gray-500">{reviews[currentReview].date}</span>
                  </div>
                </div>
              </div>

              <blockquote className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
                "{reviews[currentReview].text}"
              </blockquote>
            </div>
          </div>

          {/* Navigation */}
          <button
            onClick={prevReview}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 sm:p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
          </button>
          <button
            onClick={nextReview}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 sm:p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
          </button>

          {/* Indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentReview(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentReview ? 'bg-blue-400 scale-125' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mt-16 text-center">
          <div>
            <div className="text-3xl sm:text-4xl font-bold text-blue-400 mb-2">150+</div>
            <p className="text-sm sm:text-base text-gray-600">Prenotazioni Dirette</p>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-bold text-green-400 mb-2">500+</div>
            <p className="text-sm sm:text-base text-gray-600">Ospiti Soddisfatti</p>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-bold text-yellow-500 mb-2">98%</div>
            <p className="text-sm sm:text-base text-gray-600">Tasso di Ritorno</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;