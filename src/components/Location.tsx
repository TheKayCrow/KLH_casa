import { MapPin, Clock, Plane, Train } from 'lucide-react';

const Location = () => {
  return (
    <section id="location" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-blue-400 uppercase tracking-wide">Posizione</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mt-4 mb-6">
            Nel cuore di Fiumicino
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Situati strategicamente in Via del Faro 39, siamo nel punto perfetto per esplorare 
            Roma e godersi la vita costiera italiana.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div>
            <div className="bg-stone-50 rounded-2xl p-8 mb-8">
              <div className="flex items-center space-x-3 mb-6">
                <MapPin className="w-6 h-6 text-red-400" />
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800">Indirizzo Completo</h3>
                  <p className="text-sm sm:text-base text-gray-600">Via del Faro 39, 00054 Fiumicino RM, Italia</p>
                </div>
              </div>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Plane className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-gray-800 mb-1">Aeroporto di Fiumicino</h4>
                  <p className="text-sm sm:text-base text-gray-600 mb-2">A soli 10 minuti di auto</p>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <Clock className="w-4 h-4" />
                    <span>Transfer disponibile su richiesta</span>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <Train className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-gray-800 mb-1">Centro di Roma</h4>
                  <p className="text-sm sm:text-base text-gray-600 mb-2">30 minuti con il treno Leonardo Express</p>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <Clock className="w-4 h-4" />
                    <span>Stazione Fiumicino a 5 minuti a piedi</span>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-yellow-100 p-3 rounded-full">
                  <MapPin className="w-6 h-6 text-yellow-500" />
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-gray-800 mb-1">Spiaggia</h4>
                  <p className="text-sm sm:text-base text-gray-600 mb-2">2 minuti a piedi dalla costa</p>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <Clock className="w-4 h-4" />
                    <span>Accesso diretto alle spiagge libere</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gray-200 rounded-2xl overflow-hidden h-64 sm:h-80 lg:h-96 relative">
              {/* Google Maps Embed placeholder */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2975.123456789!2d12.2302!3d41.7691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132598c0c6f9d4c7%3A0x123456789!2sVia%20del%20Faro%2C%2039%2C%2000054%20Fiumicino%20RM%2C%20Italy!5e0!3m2!1sen!2sit!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mappa Kolesnikov Little House"
              ></iframe>
            </div>
            
            <div className="absolute bottom-6 left-6 bg-white rounded-lg shadow-lg p-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <span className="text-xs sm:text-sm font-medium text-gray-800">Kolesnikov Little House</span>
              </div>
              <p className="text-xs text-gray-600 mt-1">Via del Faro 39</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;