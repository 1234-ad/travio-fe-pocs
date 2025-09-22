'use client';

import { useState } from 'react';

export default function CategoriesPage() {
  const [selectedCategory, setSelectedCategory] = useState('adventure');

  const categories = [
    {
      id: 'adventure',
      name: 'Adventure',
      icon: '🏔️',
      description: 'Thrilling experiences and outdoor activities',
      color: 'from-orange-400 to-red-500',
      tripCount: 120
    },
    {
      id: 'beach',
      name: 'Beach & Islands',
      icon: '🏖️',
      description: 'Tropical paradises and coastal getaways',
      color: 'from-blue-400 to-cyan-500',
      tripCount: 85
    },
    {
      id: 'cultural',
      name: 'Cultural',
      icon: '🏛️',
      description: 'Historical sites and cultural immersion',
      color: 'from-purple-400 to-pink-500',
      tripCount: 95
    },
    {
      id: 'food',
      name: 'Food & Drink',
      icon: '🍜',
      description: 'Culinary adventures and local cuisine',
      color: 'from-yellow-400 to-orange-500',
      tripCount: 60
    },
    {
      id: 'wildlife',
      name: 'Wildlife',
      icon: '🦁',
      description: 'Safari and nature experiences',
      color: 'from-green-400 to-emerald-500',
      tripCount: 45
    },
    {
      id: 'city',
      name: 'City Breaks',
      icon: '🏙️',
      description: 'Urban exploration and metropolitan adventures',
      color: 'from-gray-400 to-slate-500',
      tripCount: 110
    },
    {
      id: 'luxury',
      name: 'Luxury',
      icon: '💎',
      description: 'Premium experiences and high-end travel',
      color: 'from-indigo-400 to-purple-500',
      tripCount: 35
    },
    {
      id: 'budget',
      name: 'Budget Travel',
      icon: '🎒',
      description: 'Affordable adventures and backpacking',
      color: 'from-teal-400 to-blue-500',
      tripCount: 75
    }
  ];

  const categoryTrips = {
    adventure: [
      {
        id: 1,
        title: 'Everest Base Camp Trek',
        location: 'Nepal',
        duration: '14 days',
        difficulty: 'Challenging',
        price: '$2,500',
        image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        rating: 4.9
      },
      {
        id: 2,
        title: 'Patagonia Hiking Adventure',
        location: 'Chile & Argentina',
        duration: '10 days',
        difficulty: 'Moderate',
        price: '$3,200',
        image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        rating: 4.8
      },
      {
        id: 3,
        title: 'Kilimanjaro Climb',
        location: 'Tanzania',
        duration: '7 days',
        difficulty: 'Challenging',
        price: '$2,800',
        image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        rating: 4.7
      }
    ],
    beach: [
      {
        id: 4,
        title: 'Maldives Paradise',
        location: 'Maldives',
        duration: '7 days',
        difficulty: 'Easy',
        price: '$4,500',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        rating: 4.9
      },
      {
        id: 5,
        title: 'Bali Island Hopping',
        location: 'Indonesia',
        duration: '10 days',
        difficulty: 'Easy',
        price: '$1,800',
        image: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        rating: 4.6
      }
    ],
    cultural: [
      {
        id: 6,
        title: 'Ancient Egypt Explorer',
        location: 'Egypt',
        duration: '12 days',
        difficulty: 'Easy',
        price: '$2,200',
        image: 'https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        rating: 4.8
      },
      {
        id: 7,
        title: 'Japan Cultural Journey',
        location: 'Japan',
        duration: '14 days',
        difficulty: 'Easy',
        price: '$3,500',
        image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        rating: 4.9
      }
    ]
  };

  const selectedCategoryData = categories.find(cat => cat.id === selectedCategory);
  const trips = categoryTrips[selectedCategory as keyof typeof categoryTrips] || [];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy':
        return 'bg-green-100 text-green-800';
      case 'Moderate':
        return 'bg-yellow-100 text-yellow-800';
      case 'Challenging':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Travel Categories</h1>
          <p className="text-gray-600">Discover trips that match your interests and travel style</p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {categories.map((category) => (
            <div
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`relative overflow-hidden rounded-xl cursor-pointer transform transition-all duration-300 hover:scale-105 ${
                selectedCategory === category.id ? 'ring-4 ring-indigo-500 ring-opacity-50' : ''
              }`}
            >
              <div className={`bg-gradient-to-br ${category.color} p-6 text-white h-40 flex flex-col justify-between`}>
                <div className="text-4xl mb-2">{category.icon}</div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">{category.name}</h3>
                  <p className="text-sm opacity-90">{category.tripCount} trips</p>
                </div>
              </div>
              {selectedCategory === category.id && (
                <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                  <div className="bg-white rounded-full p-2">
                    <svg className="w-6 h-6 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Selected Category Details */}
        {selectedCategoryData && (
          <div className="mb-12">
            <div className={`bg-gradient-to-r ${selectedCategoryData.color} rounded-xl p-8 text-white mb-8`}>
              <div className="flex items-center mb-4">
                <span className="text-6xl mr-4">{selectedCategoryData.icon}</span>
                <div>
                  <h2 className="text-3xl font-bold mb-2">{selectedCategoryData.name}</h2>
                  <p className="text-xl opacity-90">{selectedCategoryData.description}</p>
                </div>
              </div>
              <div className="flex items-center space-x-6 text-sm">
                <span>{selectedCategoryData.tripCount} available trips</span>
                <span>•</span>
                <span>Starting from $1,200</span>
                <span>•</span>
                <span>All difficulty levels</span>
              </div>
            </div>

            {/* Category Trips */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Featured {selectedCategoryData.name} Trips</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {trips.map((trip) => (
                  <div key={trip.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="relative h-48">
                      <img src={trip.image} alt={trip.title} className="w-full h-full object-cover" />
                      <div className="absolute top-4 left-4">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(trip.difficulty)}`}>
                          {trip.difficulty}
                        </span>
                      </div>
                      <div className="absolute top-4 right-4">
                        <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100">
                          <svg className="h-5 w-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div className="p-6">
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">{trip.title}</h4>
                      <p className="text-indigo-600 font-medium mb-3">{trip.location}</p>
                      
                      <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                        <span>⏱️ {trip.duration}</span>
                        <div className="flex items-center">
                          <svg className="w-4 h-4 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <span>{trip.rating}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-gray-900">{trip.price}</span>
                        <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {trips.length > 0 && (
                <div className="text-center mt-8">
                  <button className="bg-white text-gray-700 px-8 py-3 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors">
                    View All {selectedCategoryData.name} Trips
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Quick Stats */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Travel by the Numbers</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600 mb-2">500+</div>
              <div className="text-gray-600">Total Trips</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">150+</div>
              <div className="text-gray-600">Destinations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
              <div className="text-gray-600">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">4.8</div>
              <div className="text-gray-600">Avg Rating</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}