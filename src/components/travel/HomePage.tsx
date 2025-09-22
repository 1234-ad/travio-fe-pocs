'use client';

export default function HomePage() {
  const featuredDestinations = [
    {
      id: 1,
      name: 'Bali, Indonesia',
      image: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Tropical paradise with stunning beaches'
    },
    {
      id: 2,
      name: 'Paris, France',
      image: 'https://images.unsplash.com/photo-1502602898536-47ad22581b52?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'City of lights and romance'
    },
    {
      id: 3,
      name: 'Tokyo, Japan',
      image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Modern metropolis meets ancient culture'
    }
  ];

  const travelCategories = [
    { name: 'Adventure', icon: '🏔️', count: '120+ trips' },
    { name: 'Beach', icon: '🏖️', count: '85+ trips' },
    { name: 'Cultural', icon: '🏛️', count: '95+ trips' },
    { name: 'Food', icon: '🍜', count: '60+ trips' },
    { name: 'Wildlife', icon: '🦁', count: '45+ trips' },
    { name: 'City', icon: '🏙️', count: '110+ trips' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Discover Your Next Adventure
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Explore amazing destinations, plan perfect trips, and create unforgettable memories
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Start Planning
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors">
                Explore Destinations
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Destinations */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Destinations</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover the most popular destinations chosen by our travel community
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredDestinations.map((destination) => (
            <div key={destination.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100">
                    <svg className="h-5 w-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{destination.name}</h3>
                <p className="text-gray-600 mb-4">{destination.description}</p>
                <button className="text-indigo-600 font-semibold hover:text-indigo-700">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Travel Categories */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Travel Categories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find trips that match your interests and travel style
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {travelCategories.map((category, index) => (
              <div key={index} className="text-center p-6 rounded-xl border border-gray-200 hover:border-indigo-300 hover:shadow-md transition-all cursor-pointer">
                <div className="text-4xl mb-3">{category.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-1">{category.name}</h3>
                <p className="text-sm text-gray-500">{category.count}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Recent Activity</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            See what other travelers are up to
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <img
                className="h-12 w-12 rounded-full"
                src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="User"
              />
              <div className="flex-1">
                <p className="text-gray-900">
                  <span className="font-semibold">Sarah Johnson</span> just booked a trip to Iceland
                </p>
                <p className="text-sm text-gray-500">2 hours ago</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <img
                className="h-12 w-12 rounded-full"
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="User"
              />
              <div className="flex-1">
                <p className="text-gray-900">
                  <span className="font-semibold">Mike Chen</span> shared photos from Thailand
                </p>
                <p className="text-sm text-gray-500">5 hours ago</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <img
                className="h-12 w-12 rounded-full"
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="User"
              />
              <div className="flex-1">
                <p className="text-gray-900">
                  <span className="font-semibold">Emma Davis</span> completed her European backpacking trip
                </p>
                <p className="text-sm text-gray-500">1 day ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}