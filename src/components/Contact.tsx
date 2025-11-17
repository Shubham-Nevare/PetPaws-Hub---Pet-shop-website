import { MapPin, Phone, Mail, MessageCircle, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-gradient-to-b from-pink-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Get in Touch With Us
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Have questions about our products or services? We're here to help you and your pets 24/7
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-6 shadow-lg transform hover:scale-105 transition">
              <div className="flex items-start space-x-4">
                <div className="bg-pink-100 rounded-full p-4 flex-shrink-0">
                  <MapPin className="w-6 h-6 text-pink-500" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-2">Our Location</h3>
                  <p className="text-gray-600">123 Pet Street, Happy Town,<br />California 90210, United States</p>
                  <p className="text-sm text-gray-500 mt-2">Visit our store for personal consultations</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-lg transform hover:scale-105 transition">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 rounded-full p-4 flex-shrink-0">
                  <Phone className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-2">Phone Number</h3>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                  <p className="text-sm text-gray-500 mt-2">Available for product info & orders</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-lg transform hover:scale-105 transition">
              <div className="flex items-start space-x-4">
                <div className="bg-purple-100 rounded-full p-4 flex-shrink-0">
                  <Mail className="w-6 h-6 text-purple-500" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-2">Email Address</h3>
                  <p className="text-gray-600">hello@petpawshub.com</p>
                  <p className="text-sm text-gray-500 mt-2">We respond within 24 hours</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-lg transform hover:scale-105 transition">
              <div className="flex items-start space-x-4">
                <div className="bg-orange-100 rounded-full p-4 flex-shrink-0">
                  <Clock className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-2">Opening Hours</h3>
                  <p className="text-gray-600 text-sm">
                    <span className="block">Mon - Fri: 9:00 AM - 7:00 PM</span>
                    <span className="block">Sat - Sun: 10:00 AM - 6:00 PM</span>
                  </p>
                  <p className="text-sm text-gray-500 mt-2">Online orders 24/7</p>
                </div>
              </div>
            </div>

            <button className="w-full flex items-center justify-center space-x-2 bg-green-500 text-white px-8 py-4 rounded-full hover:bg-green-600 transition shadow-lg hover:shadow-xl transform hover:scale-105 font-semibold text-lg">
              <MessageCircle className="w-6 h-6" />
              <span>Chat on WhatsApp Now</span>
            </button>
          </div>

          <div className="bg-white rounded-3xl overflow-hidden shadow-lg transform hover:scale-105 transition duration-300">
            <div className="w-full h-full min-h-[600px] bg-gradient-to-br from-blue-200 via-pink-200 to-purple-200 flex items-center justify-center p-8">
              <div className="text-center">
                <MapPin className="w-24 h-24 text-pink-500 mx-auto mb-4" />
                <p className="text-gray-800 font-bold text-xl mb-2">Find Us Here</p>
                <p className="text-gray-700 text-lg mb-4">123 Pet Street, Happy Town</p>
                <p className="text-gray-600 max-w-xs">
                  Located in the heart of the city, easily accessible with ample parking for your convenience
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
