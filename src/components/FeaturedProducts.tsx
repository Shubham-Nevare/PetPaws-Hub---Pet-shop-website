import { MessageCircle } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Premium Organic Dog Food',
    price: 1799, // Avg ₹1500–2200 for premium organic food
    rating: 4.8,
    reviews: 245,
    image: 'https://m.media-amazon.com/images/I/61qRWTsBqcL._SX522_.jpg',
    description: 'High-protein formula with natural ingredients',
    badge: 'Bestseller'
  },
  {
    id: 2,
    name: 'Multi-Level Cat Scratching Post',
    price: 2499, // Avg ₹2000–3500
    rating: 4.7,
    reviews: 189,
    image: 'https://img-us.aosomcdn.com/thumbnail/100/n0/product/2025/04/07/9dxa651960f6097d8.jpg',
    description: 'Sturdy design with rope and cardboard',
    badge: 'Top Rated'
  },
  {
    id: 3,
    name: 'Gentle Pet Shampoo',
    price: 499, // Avg ₹350–650 for hypoallergenic shampoo
    rating: 4.9,
    reviews: 312,
    image: 'https://m.media-amazon.com/images/I/71JxS1gNVjL._AC_UF1000,1000_QL80_.jpg',
    description: 'Hypoallergenic and tear-free formula',
    badge: 'Recommended'
  },
  {
    id: 4,
    name: 'Interactive Chew Toys Set',
    price: 899, // Avg ₹700–1200 for 5pc set
    rating: 4.6,
    reviews: 156,
    image: 'https://www.jiomart.com/images/product/original/rvoxxus8h1/emily-pets-5-piece-dog-toy-set-pack-with-dog-chew-toys-chew-toys-for-dog-rubber-chew-toy-combo-playing-chewing-interactive-durable-small-puppy-dog-toys-5-in-1-comb-product-images-orvoxxus8h1-p596735641-1-202212311118.jpg?im=Resize=(1000,1000)',
    description: 'Durable rubber toys with textures',
    badge: 'Fun & Safe'
  },
  {
    id: 5,
    name: 'Designer Pet Collar',
    price: 349, // Avg ₹250–500 for premium collars
    rating: 4.8,
    reviews: 203,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJMkP4b_y5vi6RiH2A_BQQ3NYID_55miJIUQ&s',
    description: 'Comfortable with ID tag holder',
    badge: 'Stylish'
  },
  {
    id: 6,
    name: 'Travel Pet Carrier',
    price: 1999, // Avg ₹1500–3000
    rating: 4.7,
    reviews: 127,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHHx7jRdztsYADS9m6a8JhGsssPo7sqjhZdA&s',
    description: 'Portable with ventilation windows',
    badge: 'Travel Ready'
  },
  {
    id: 7,
    name: 'Salmon Flavored Cat Treats',
    price: 349, // Avg ₹300–450 for 20 pcs
    rating: 4.9,
    reviews: 421,
    image: 'https://headsupfortails.com/cdn/shop/files/Me-OCreamyCatTreats-Crab-Packof20_20x15g_de86988f-710f-4e6e-8341-5d91db40e545.jpg?v=1757398836&width=1445',
    description: 'All-natural ingredients, irresistible taste',
    badge: 'Most Loved'
  },
  {
    id: 8,
    name: 'Orthopedic Pet Bed',
    price: 2799, // Avg ₹2000–4000 for memory foam beds
    rating: 4.8,
    reviews: 178,
    image: 'https://m.media-amazon.com/images/I/91E5MptyF3L.jpg',
    description: 'Memory foam with washable cover',
    badge: 'Comfort'
  }
];

export default function FeaturedProducts() {
  return (
    <section id="products" className="py-16 bg-gradient-to-b from-pink-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Featured Products
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Handpicked premium quality products trusted by thousands of pet owners. Each item is carefully selected to ensure your pets get the best care possible.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition group"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                />
                <div className="absolute top-4 right-4 bg-pink-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {product.badge}
                </div>
              </div>
              <div className="p-6 space-y-3">
                <h3 className="text-lg font-bold text-gray-800 line-clamp-2">{product.name}</h3>
                <p className="text-gray-600 text-sm">{product.description}</p>
                <div className="flex items-center space-x-2">
                  <div className="flex text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={i < Math.floor(product.rating) ? '' : 'opacity-30'}>★</span>
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">({product.reviews})</span>
                </div>
                <p className="text-2xl font-bold text-pink-500">₹{product.price}</p>
                <button className="w-full flex items-center justify-center space-x-2 bg-green-500 text-white px-4 py-3 rounded-full hover:bg-green-600 transition font-semibold">
                  <MessageCircle className="w-5 h-5" />
                  <span>Order on WhatsApp</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
