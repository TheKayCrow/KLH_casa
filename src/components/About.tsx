import { Heart, Users, Coffee } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="flex items-center space-x-2 mb-6">
              <Heart className="w-6 h-6 text-red-400" />
              <span className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Chi Siamo</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
              Una casa che racconta storie
            </h2>
            <div className="text-gray-600 mb-8 space-y-4">
              <p className="text-base sm:text-lg leading-relaxed">
                Benvenuti nella nostra piccola oasi sulla costa di Fiumicino. Kolesnikov Little House 
                non è solo un appartamento, è un rifugio dove ogni dettaglio è pensato per farvi sentire 
                a casa, lontano da casa.
              </p>
              <p className="text-base sm:text-lg leading-relaxed">
                Situata in Via del Faro 39, la nostra casa si trova nel cuore pulsante di Fiumicino, 
                a pochi passi dal mare cristallino e dalle tradizionali trattorie di pesce che rendono 
                questa zona unica nel suo genere.
              </p>
              <p className="text-base sm:text-lg leading-relaxed">
                Con oltre 200 recensioni a 5 stelle, accogliamo viaggiatori da tutto il mondo, 
                offrendo loro non solo un alloggio, ma un'esperienza autentica della vita costiera italiana.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-1">500+</h3>
                <p className="text-sm text-gray-600">Ospiti Felici</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Heart className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-1">4.9/5</h3>
                <p className="text-sm text-gray-600">Rating Medio</p>
              </div>
              <div className="text-center">
                <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Coffee className="w-8 h-8 text-yellow-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-1">3 Anni</h3>
                <p className="text-sm text-gray-600">Di Ospitalità</p>
              </div>
            </div>
          </div>

          <div className="relative order-1 lg:order-2">
            <div className="relative z-10">
              <img 
                src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Interior della casa"
                className="rounded-2xl shadow-2xl w-full h-64 sm:h-80 lg:h-96 object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 z-0">
              <img 
                src="https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Vista mare"
                className="rounded-2xl shadow-xl w-32 h-20 sm:w-48 sm:h-32 object-cover"
              />
            </div>
            <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 z-0">
              <img 
                src="https://images.pexels.com/photos/3555615/pexels-photo-3555615.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Cucina accogliente"
                className="rounded-2xl shadow-xl w-28 h-20 sm:w-40 sm:h-28 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;