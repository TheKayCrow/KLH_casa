import { Wifi, ChefHat, Wind, Plane, Car, Waves, Coffee, Tv, MessageCircle } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Wifi className="w-8 h-8" />,
      title: "Wi-Fi Gratuito",
      description: "Connessione veloce e affidabile in tutto l'appartamento"
    },
    {
      icon: <ChefHat className="w-8 h-8" />,
      title: "Cucina Completa",
      description: "Attrezzata con tutto il necessario per cucinare come a casa"
    },
    {
      icon: <Wind className="w-8 h-8" />,
      title: "Aria Condizionata",
      description: "Clima perfetto in ogni stagione dell'anno"
    },
    {
      icon: <Plane className="w-8 h-8" />,
      title: "Vicino all'Aeroporto",
      description: "A soli 10 minuti dall'Aeroporto di Fiumicino"
    },
    {
      icon: <Waves className="w-8 h-8" />,
      title: "Vista Mare",
      description: "A pochi passi dalle splendide spiagge di Fiumicino"
    },
    {
      icon: <Car className="w-8 h-8" />,
      title: "Parcheggio",
      description: "Posto auto disponibile nelle vicinanze"
    },
    {
      icon: <Coffee className="w-8 h-8" />,
      title: "Colazione Inclusa",
      description: "Inizia la giornata con caffè italiano e cornetti"
    },
    {
      icon: <Tv className="w-8 h-8" />,
      title: "Smart TV",
      description: "Intrattenimento con Netflix e canali internazionali"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-blue-400 uppercase tracking-wide">Servizi</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mt-4 mb-6">
            Tutto quello di cui hai bisogno
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            La nostra casa è pensata per offrirvi il massimo comfort durante il vostro soggiorno, 
            con servizi moderni e l'accoglienza tipica italiana.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group p-6 rounded-2xl bg-gray-50 hover:bg-blue-50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="text-blue-400 group-hover:text-blue-500 transition-colors duration-300 mb-4">
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-400 to-green-400 rounded-3xl p-8 md:p-12 text-center text-white">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Pronto per la tua vacanza perfetta?
          </h3>
          <p className="text-lg sm:text-xl mb-8 text-white/90">
            Contattaci ora per verificare la disponibilità e prenotare
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-white text-blue-400 font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg justify-center"
            >
              Prenota Ora
            </button>
            <a
              href="https://wa.me/393281234567?text=Ciao! Sono interessato a prenotare Kolesnikov Little House. Potreste darmi informazioni su disponibilità e prezzi?"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-green-500 text-white font-semibold rounded-full hover:bg-green-600 transition-all duration-300 transform hover:scale-105 shadow-lg justify-center"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;