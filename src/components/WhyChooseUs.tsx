import { Shield, Zap, DollarSign, Heart } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Trusted Quality',
    description: 'All products sourced from certified brands with rigorous quality standards and safety testing',
    color: 'from-blue-200 to-blue-300',
    iconColor: 'text-blue-600'
  },
  {
    icon: Zap,
    title: 'Fast Delivery',
    description: 'Quick shipping with tracking. Most orders arrive within 2-3 business days to your door',
    color: 'from-orange-200 to-orange-300',
    iconColor: 'text-orange-600'
  },
  {
    icon: DollarSign,
    title: 'Competitive Prices',
    description: 'Best value for your money with regular deals, discounts, and loyalty rewards',
    color: 'from-green-200 to-green-300',
    iconColor: 'text-green-600'
  },
  {
    icon: Heart,
    title: 'Pet-Friendly Products',
    description: 'All items are vet-approved, safe, and specifically chosen for your pet\'s health and happiness',
    color: 'from-pink-200 to-pink-300',
    iconColor: 'text-pink-600'
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Why Choose PetPaws Hub?
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We're committed to providing exceptional service and premium products for your beloved pets' happiness and well-being
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className={`bg-gradient-to-br ${feature.color} rounded-3xl p-8 text-center transform hover:scale-105 transition shadow-lg hover:shadow-xl`}
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-white rounded-full p-6 shadow-md">
                    <Icon className={`w-10 h-10 ${feature.iconColor}`} />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-700 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
