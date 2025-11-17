import { ShoppingBag, MessageCircle } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:pt-6 md:pb-14">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight">
              Everything Your Pet Needs{" "}
              <span className="text-pink-500">in One Place</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              From premium nutrition and grooming services to premium
              accessories and health care products—we have everything to keep
              your beloved pets happy, healthy, and stylish.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="flex items-center justify-center space-x-2 bg-pink-500 text-white px-8 py-4 rounded-full hover:bg-pink-600 transition shadow-lg hover:shadow-xl transform hover:scale-105">
                <ShoppingBag className="w-5 h-5" />
                <span className="font-semibold">Shop Now</span>
              </button>
              <button className="flex items-center justify-center space-x-2 bg-green-500 text-white px-8 py-4 rounded-full hover:bg-green-600 transition shadow-lg hover:shadow-xl transform hover:scale-105">
                <MessageCircle className="w-5 h-5" />
                <span className="font-semibold">WhatsApp Inquiry</span>
              </button>
            </div>
            <div className="pt-6 border-t border-gray-300 flex justify-center md:justify-start space-x-8">
              <div>
                <p className="text-2xl font-bold text-pink-500">10K+</p>
                <p className="text-gray-600">Happy Customers</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-pink-500">500+</p>
                <p className="text-gray-600">Products</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-pink-500">24/7</p>
                <p className="text-gray-600">Support</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl ">
              <img
                src="/pet shop hero img.jpg"
                alt="Happy dogs and cats together"
                className="w-full h-full object-cover hover:scale-105 transition duration-500"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl max-w-xs">
              <p className="text-sm font-semibold text-gray-600 mb-2">
                Trusted by Pet Lovers Worldwide
              </p>
              <div className="flex items-center space-x-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-500">
                      ★
                    </span>
                  ))}
                </div>
                <span className="text-gray-700 font-semibold">
                  4.9/5 Rating
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-pink-200 rounded-full filter blur-3xl opacity-30 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200 rounded-full filter blur-3xl opacity-30 -z-10"></div>
    </section>
  );
}
