import { Menu, X, ShoppingCart, PawPrint } from 'lucide-react';

interface HeaderProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (value: boolean) => void;
}

const blinkStyle = `
  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.4; }
  }
  .blink-animate {
    animation: blink 1.5s infinite;
  }
`;

export default function Header({ isMobileMenuOpen, setIsMobileMenuOpen }: HeaderProps) {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <style>{blinkStyle}</style>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <PawPrint className="w-8 h-8 text-pink-500" />
              <span className="text-2xl font-bold text-gray-800">
                PetPaws <span className="text-pink-500">Hub</span>
              </span>
            </div>
            {/* Demo Message Badge */}
            <div className="flex bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-2xl text-xs sm:text-sm font-semibold shadow-lg blink-animate">
              <span>Only Demo Purpose</span>
            </div>
          </div>

          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-pink-500 transition">Home</a>
            <a href="#categories" className="text-gray-700 hover:text-pink-500 transition">Categories</a>
            <a href="#products" className="text-gray-700 hover:text-pink-500 transition">Products</a>
            <a href="#services" className="text-gray-700 hover:text-pink-500 transition">Services</a>
            <a href="#contact" className="text-gray-700 hover:text-pink-500 transition">Contact</a>
          </nav>

          <div className="flex items-center space-x-4">
            <button className="hidden md:flex items-center space-x-2 bg-pink-500 text-white px-4 py-2 rounded-full hover:bg-pink-600 transition">
              <ShoppingCart className="w-5 h-5" />
              <span>Cart</span>
            </button>

            <button
              className="md:hidden text-gray-700"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            <a href="#home" className="block text-gray-700 hover:text-pink-500 transition py-2">Home</a>
            <a href="#categories" className="block text-gray-700 hover:text-pink-500 transition py-2">Categories</a>
            <a href="#products" className="block text-gray-700 hover:text-pink-500 transition py-2">Products</a>
            <a href="#services" className="block text-gray-700 hover:text-pink-500 transition py-2">Services</a>
            <a href="#contact" className="block text-gray-700 hover:text-pink-500 transition py-2">Contact</a>
            <button className="w-full flex items-center justify-center space-x-2 bg-pink-500 text-white px-4 py-2 rounded-full hover:bg-pink-600 transition">
              <ShoppingCart className="w-5 h-5" />
              <span>Cart</span>
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}
