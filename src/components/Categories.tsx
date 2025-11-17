import { Apple, Sparkles, Scissors, Gamepad2 } from 'lucide-react';

const categories = [
  {
    id: 1,
    name: 'Pet Food',
    icon: Apple,
    color: 'from-orange-200 to-orange-300',
    iconColor: 'text-orange-600'
  },
  {
    id: 2,
    name: 'Accessories',
    icon: Sparkles,
    color: 'from-pink-200 to-pink-300',
    iconColor: 'text-pink-600'
  },
  {
    id: 3,
    name: 'Grooming Services',
    icon: Scissors,
    color: 'from-blue-200 to-blue-300',
    iconColor: 'text-blue-600'
  },
  {
    id: 4,
    name: 'Pet Toys',
    icon: Gamepad2,
    color: 'from-purple-200 to-purple-300',
    iconColor: 'text-purple-600'
  }
];

export default function Categories() {
  return (
    <section id="categories" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Shop by Category
          </h2>
          <p className="text-gray-600 text-lg">
            Find everything your furry friend needs
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.id}
                className={`bg-gradient-to-br ${category.color} rounded-3xl p-8 text-center cursor-pointer transform hover:scale-105 transition shadow-lg hover:shadow-xl`}
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-white rounded-full p-6 shadow-md">
                    <Icon className={`w-12 h-12 ${category.iconColor}`} />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800">{category.name}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
