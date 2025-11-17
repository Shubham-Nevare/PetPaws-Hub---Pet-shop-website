import { Sparkles, Scissors, Bath, Heart } from 'lucide-react';

const services = [
  { 
    icon: Bath, 
    name: 'Full Bath Service', 
    description: 'Complete wash & dry with premium shampoo', 
    price: '₹500' 
  },
  { 
    icon: Scissors, 
    name: 'Haircut & Styling', 
    description: 'Professional breed-specific grooming', 
    price: '₹800' 
  },
  { 
    icon: Sparkles, 
    name: 'Nail Trimming', 
    description: 'Safe & gentle nail care', 
    price: '₹150'  
  },
  { 
    icon: Heart, 
    name: 'Spa Treatment', 
    description: 'Premium pampering with aromatherapy', 
    price: '₹1200'
  }
];


const beforeAfter = [
  {
    name: "Golden Retriever",
    before: "Golden Retriever before.jpg",
    after:  "Golden Retriever after.jpg",
    bgColor: "from-blue-100 to-blue-200"
  },
  {
    name: "Persian Cat",
    before: "Persian Cat before.jpg",
    after:  "Persian Cat after.jpg",
    bgColor: "from-pink-100 to-pink-200"
  },
  {
    name: "Labradoodle",
    before: "/Labradoodle before.jpg",
    after:  "/Labradoodle after.jpg",
    bgColor: "from-purple-100 to-purple-200"
  }
];


export default function GroomingServices() {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Professional Grooming Services
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Our certified groomers provide expert care using premium products and gentle techniques to keep your pets looking and feeling their best
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-pink-100 to-blue-100 rounded-3xl p-6 text-center transform hover:scale-105 transition shadow-md"
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-white rounded-full p-4 shadow-md">
                    <Icon className="w-8 h-8 text-pink-500" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{service.name}</h3>
                <p className="text-gray-600 text-sm mb-3">{service.description}</p>
                <p className="text-xl font-bold text-pink-500">{service.price}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-br from-yellow-50 to-pink-50 rounded-3xl p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Before & After Gallery
          </h3>
          <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
            See the transformation our expert groomers can achieve. We tailor each service to your pet's unique needs
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {beforeAfter.map((item, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${item.bgColor} rounded-2xl overflow-hidden transform hover:scale-105 transition shadow-lg`}
              >
                <div className="grid grid-cols-2 h-64">
                  <div className="relative overflow-hidden">
                    <img
                      src={item.before}
                      alt="Before"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                      <p className="text-white font-bold text-sm">Before</p>
                    </div>
                  </div>
                  <div className="relative overflow-hidden">
                    <img
                      src={item.after}
                      alt="After"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                      <p className="text-white font-bold text-sm">After</p>
                    </div>
                  </div>
                </div>
                <div className="p-4 text-center">
                  <p className="font-bold text-gray-800">{item.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
