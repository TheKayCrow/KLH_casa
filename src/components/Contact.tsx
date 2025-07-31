import React, { useState } from 'react';
import { Mail, Phone, MessageCircle, Send, MapPin, Clock, Calendar, Users } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    checkin: '',
    checkout: '',
    guests: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message with booking details
    const message = `🏠 RICHIESTA PRENOTAZIONE - Little House Kolesnikov
    const message = \`🏠 RICHIESTA PRENOTAZIONE - Kolesnikov Little House

👤 Nome: ${formData.name}
📧 Email: ${formData.email}
📱 Telefono: ${formData.phone}
📅 Check-in: ${formData.checkin}
📅 Check-out: ${formData.checkout}
👥 Ospiti: ${formData.guests}
💬 Richieste speciali: ${formData.message || 'Nessuna'}

Grazie per aver scelto Kolesnikov Little House! 🌊`;

    const whatsappUrl = `https://wa.me/393281234567?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    alert('Ti stiamo reindirizzando a WhatsApp per completare la prenotazione!');
    setFormData({
      name: '',
      email: '',
      phone: '',
      checkin: '',
      checkout: '',
      guests: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <section id="contact" className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-blue-400 uppercase tracking-wide">Contatti</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mt-4 mb-6">
              Pianifica il tuo soggiorno
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Hai domande o vuoi maggiori informazioni? Siamo qui per aiutarti a organizzare 
              la tua vacanza perfetta a Fiumicino.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Info */}
            <div>
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg mb-8">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6">Informazioni di Contatto</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <MapPin className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="text-sm sm:text-base font-semibold text-gray-800 mb-1">Indirizzo</h4>
                      <p className="text-sm sm:text-base text-gray-600">Via del Faro 39<br />00054 Fiumicino, Roma</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-green-100 p-3 rounded-full">
                      <Phone className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <h4 className="text-sm sm:text-base font-semibold text-gray-800 mb-1">Telefono</h4>
                      <p className="text-sm sm:text-base text-gray-600">+39 328 123 4567</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-yellow-100 p-3 rounded-full">
                      <Mail className="w-6 h-6 text-yellow-500" />
                    </div>
                    <div>
                      <h4 className="text-sm sm:text-base font-semibold text-gray-800 mb-1">Email</h4>
                      <p className="text-sm sm:text-base text-gray-600">info@kolesnikovlittlehouse.it</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-purple-100 p-3 rounded-full">
                      <Clock className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="text-sm sm:text-base font-semibold text-gray-800 mb-1">Orari di Risposta</h4>
                      <p className="text-sm sm:text-base text-gray-600">Tutti i giorni: 8:00 - 22:00</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-400 to-green-400 rounded-2xl p-6 sm:p-8 text-white">
                <h3 className="text-xl sm:text-2xl font-bold mb-4">Prenota con Noi</h3>
                <p className="mb-6 text-sm sm:text-base text-white/90">
                  Contattaci direttamente per verificare disponibilità, prezzi personalizzati 
                  e offerte speciali. Risposta garantita entro 2 ore!
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://wa.me/393281234567?text=Ciao! Vorrei prenotare Kolesnikov Little House. Potreste darmi informazioni su disponibilità e prezzi?"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-green-500 text-white font-semibold rounded-full hover:bg-green-600 transition-all duration-300 transform hover:scale-105 justify-center text-sm sm:text-base"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    WhatsApp
                  </a>
                  <a
                    href="tel:+393281234567"
                    className="inline-flex items-center px-6 py-3 bg-white text-blue-400 font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 justify-center text-sm sm:text-base"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Chiama Ora
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6">Richiedi Prenotazione</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                      placeholder="Il tuo nome"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                      placeholder="tua@email.com"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                      Telefono
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                      placeholder="+39 328 123 4567"
                    />
                  </div>

                  <div>
                    <label htmlFor="guests" className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                      Numero Ospiti
                    </label>
                    <select
                      id="guests"
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                    >
                      <option value="">Seleziona</option>
                      <option value="1">1 ospite</option>
                      <option value="2">2 ospiti</option>
                      <option value="3">3 ospiti</option>
                      <option value="4">4 ospiti</option>
                      <option value="5+">5+ ospiti</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="dates" className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                    Date di Soggiorno *
                  </label>
                  <div className="grid sm:grid-cols-2 gap-3">
                    <div>
                      <input
                        type="date"
                        id="checkin"
                        name="checkin"
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                        required
                      />
                      <label className="text-xs text-gray-500 mt-1 block">Check-in</label>
                    </div>
                    <div>
                      <input
                        type="date"
                        id="checkout"
                        name="checkout"
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                        required
                      />
                      <label className="text-xs text-gray-500 mt-1 block">Check-out</label>
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                    Richieste Speciali
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                    placeholder="Transfer aeroporto, colazione speciale, celebrazioni, allergie alimentari..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-400 to-green-400 text-white font-semibold py-3 sm:py-4 rounded-lg hover:from-blue-500 hover:to-green-500 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 text-sm sm:text-base"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Richiedi Prenotazione</span>
                </button>
                
                <div className="text-center">
                  <p className="text-xs sm:text-sm text-gray-600 mb-4">Oppure contattaci direttamente:</p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <a
                      href="https://wa.me/393281234567?text=Ciao! Vorrei prenotare Kolesnikov Little House per le date: [inserisci date]. Siamo [inserisci numero ospiti] persone."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-green-500 text-white font-medium rounded-lg hover:bg-green-600 transition-all duration-300 justify-center text-sm"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      WhatsApp
                    </a>
                    <a
                      href="tel:+393281234567"
                      className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition-all duration-300 justify-center text-sm"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Telefono
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Add Send icon to your contact form button */}
      <button 
          type="submit" 
          className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark"
      >
          <Send size={20} />
          Invia Messaggio
      </button>

      {/* Add Users icon to your capacity info */}
      <div className="flex items-center gap-2 text-gray-600">
          <Users size={20} />
          <span>Capacità: 4-6 persone</span>
      </div>
    </div>
  );
};

export default Contact;