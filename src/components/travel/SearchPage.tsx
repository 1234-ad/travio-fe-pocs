'use client';

import { useState } from 'react';

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilters, setSelectedFilters] = useState({
    type: 'all',
    budget: 'all',
    duration: 'all',
    season: 'all'
  });

  const searchResults = [
    {
      id: 1,
      type: 'destination',
      title: 'Bali, Indonesia',
      description: 'Tropical paradise with stunning beaches, ancient temples, and vibrant culture',
      image: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      rating: 4.8,
      price: '$1,200 - $2,500',
      duration: '7-14 days',
      bestTime: 'Apr-Oct'
    },
    {
      id: 2,
      type: 'trip',
      title: 'European Backpacking Adventure',
      description: 'Visit 8 countries in 3 weeks: France, Germany, Italy, Switzerland, Austria, Czech Republic, Hungary, Poland',
      image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      rating: 4.6,
      price: '$2,800 - $4,200',
      duration: '21 days',
      bestTime: 'May-Sep'
    },
    {
      id: 3,
      type: 'experience',
      title: 'Northern Lights Photography Tour',
      description: 'Capture the aurora borealis in Iceland with professional photography guidance',
      image: 'https://images.unsplash.com/photo-1539066909543-e6217c3c7e1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      rating: 4.9,
      price: '$3,500 - $5,000',
      duration: '5-7 days',
      bestTime: 'Oct-Mar'
    },
    {
      id: 4,
      type: 'destination',
      title: 'Kyoto, Japan',
      description: 'Ancient capital with traditional temples, gardens, and authentic Japanese culture',
      image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      rating: 4.7,
      price: '$1,800 - $3,200',
      duration: '5-10 days',
      bestTime: 'Mar-May, Sep-Nov'
    }
  ];

  const popularSearches = [
    'Bali Indonesia', 'European Backpacking', 'Japan Cherry Blossom', 'Iceland Northern Lights',
    'Thailand Islands', 'Peru Machu Picchu', 'Morocco Desert', 'New Zealand Road Trip'
  ];

  const handleFilterChange = (filterType: string, value: string) => {
    setSelectedFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'destination':
        return '📍';
      case 'trip':
        return '🎒';
      case 'experience':
        return '⭐';
      default:
        return '🌍';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'destination':
        return 'bg-blue-100 text-blue-800';
      case 'trip':
        return 'bg-green-100 text-green-800';
      case 'experience':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Search</h1>
          
          {/* Search Bar */}
          <div className="relative mb-6">
            <input
              type="text"
              placeholder="Search destinations, trips, experiences..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-6 py-4 text-lg border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent shadow-sm"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-6">
              <svg className="h-6 w-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          {/* Popular Searches */}
          <div className="mb-6">
            <p className="text-sm text-gray-600 mb-3">Popular searches:</p>
            <div className="flex flex-wrap gap-2">
              {popularSearches.map((search, index) => (
                <button
                  key={index}
                  onClick={() => setSearchQuery(search)}
                  className="px-3 py-1 bg-white text-gray-700 rounded-full text-sm border border-gray-300 hover:bg-gray-50 transition-colors"
                >
                  {search}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Filters</h3>
              
              {/* Type Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Type</label>
                <select
                  value={selectedFilters.type}
                  onChange={(e) => handleFilterChange('type', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="all">All Types</option>
                  <option value="destination">Destinations</option>
                  <option value="trip">Trip Packages</option>
                  <option value="experience">Experiences</option>
                </select>
              </div>

              {/* Budget Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Budget</label>
                <select
                  value={selectedFilters.budget}
                  onChange={(e) => handleFilterChange('budget', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="all">Any Budget</option>
                  <option value="budget">Under $1,500</option>
                  <option value="mid">$1,500 - $3,000</option>
                  <option value="luxury">$3,000+</option>
                </select>
              </div>

              {/* Duration Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Duration</label>
                <select
                  value={selectedFilters.duration}
                  onChange={(e) => handleFilterChange('duration', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="all">Any Duration</option>
                  <option value="short">1-5 days</option>
                  <option value="medium">6-14 days</option>
                  <option value="long">15+ days</option>
                </select>
              </div>

              {/* Season Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Best Season</label>
                <select
                  value={selectedFilters.season}
                  onChange={(e) => handleFilterChange('season', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="all">Any Season</option>
                  <option value="spring">Spring</option>
                  <option value="summer">Summer</option>
                  <option value="fall">Fall</option>
                  <option value="winter">Winter</option>
                </select>
              </div>

              <button className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors">
                Apply Filters
              </button>
            </div>
          </div>

          {/* Search Results */}
          <div className="flex-1">
            <div className="mb-6">
              <p className="text-gray-600">
                Showing {searchResults.length} results {searchQuery && `for "${searchQuery}"`}
              </p>
            </div>

            <div className="space-y-6">
              {searchResults.map((result) => (
                <div key={result.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-80 h-48 md:h-auto">
                      <img 
                        src={result.image} 
                        alt={result.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(result.type)}`}>
                            {getTypeIcon(result.type)} {result.type.charAt(0).toUpperCase() + result.type.slice(1)}
                          </span>
                          <div className="flex items-center">
                            <svg className="w-4 h-4 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <span className="text-sm text-gray-600">{result.rating}</span>
                          </div>
                        </div>
                        <button className="text-gray-400 hover:text-red-500 transition-colors">
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                          </svg>
                        </button>
                      </div>
                      
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{result.title}</h3>
                      <p className="text-gray-600 mb-4">{result.description}</p>
                      
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
                        <span>💰 {result.price}</span>
                        <span>⏱️ {result.duration}</span>
                        <span>🌤️ {result.bestTime}</span>
                      </div>
                      
                      <div className="flex space-x-3">
                        <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                          View Details
                        </button>
                        <button className="border border-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                          Save for Later
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <button className="bg-white text-gray-700 px-8 py-3 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors">
                Load More Results
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}