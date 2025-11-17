import { Star } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: 'Sarah Johnson',
    pet: 'Golden Retriever Owner',
    avatar: '👩',
    rating: 5,
    comment: 'Amazing quality food and toys! My dog absolutely loves everything we got. Fast delivery and excellent customer service. Highly recommended!',
    bgColor: 'from-pink-100 to-pink-200'
  },
  {
    id: 2,
    name: 'Michael Chen',
    pet: 'Persian Cat Owner',
    avatar: '👨',
    rating: 5,
    comment: 'The grooming service was fantastic! The staff were so gentle and professional. My cat looks absolutely beautiful and feels so pampered!',
    bgColor: 'from-blue-100 to-blue-200'
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    pet: 'Bunny & Hamster Mom',
    avatar: '👩‍🦰',
    rating: 5,
    comment: 'Best pet shop experience ever! Great product selection, wonderful staff, competitive pricing, and my pets are thriving with all these products!',
    bgColor: 'from-purple-100 to-purple-200'
  },
  {
    id: 4,
    name: 'David Thompson',
    pet: 'Dog Dad & Cat Lover',
    avatar: '👨‍🦱',
    rating: 5,
    comment: 'The WhatsApp ordering is so convenient! Products arrive promptly and everything is top quality. Best pet store in town, period!',
    bgColor: 'from-yellow-100 to-yellow-200'
  }
];

export default function Reviews() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Happy Pet Parents Share Their Stories
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust PetPaws Hub for their pet care needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review) => (
            <div
              key={review.id}
              className={`bg-gradient-to-br ${review.bgColor} rounded-3xl p-6 transform hover:scale-105 transition shadow-lg hover:shadow-xl`}
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="text-5xl">{review.avatar}</div>
                <div>
                  <h3 className="font-bold text-gray-800 text-sm">{review.name}</h3>
                  <p className="text-xs text-gray-600">{review.pet}</p>
                </div>
              </div>
              <div className="flex mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed text-sm">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
