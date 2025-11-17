import { PawPrint, Facebook, Instagram, Twitter, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <PawPrint className="w-8 h-8 text-pink-500" />
              <span className="text-2xl font-bold">
                PetPaws <span className="text-pink-500">Hub</span>
              </span>
            </div>
            <p className="text-gray-400">
              Your one-stop shop for everything your pet needs. Quality products, caring service.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-pink-500 transition">Home</a></li>
              <li><a href="#categories" className="text-gray-400 hover:text-pink-500 transition">Categories</a></li>
              <li><a href="#products" className="text-gray-400 hover:text-pink-500 transition">Products</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-pink-500 transition">Services</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-pink-500 transition">About Us</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-pink-500 transition">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-pink-500 transition">Shipping Info</a></li>
              <li><a href="#" className="text-gray-400 hover:text-pink-500 transition">Return Policy</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-700 p-3 rounded-full hover:bg-pink-500 transition">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-700 p-3 rounded-full hover:bg-pink-500 transition">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-700 p-3 rounded-full hover:bg-pink-500 transition">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center space-x-2">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-pink-500 fill-pink-500" />
            <span>for Pet Lovers</span>
          </p>
          <p className="text-gray-500 mt-2">© 2024 PetPaws Hub. All rights reserved.Build by <strong>Shubham</strong></p>
        </div>
      </div>
    </footer>
  );
}
