'use client';

import { useState } from 'react';

export default function MyTripsPage() {
  const [activeTab, setActiveTab] = useState('upcoming');

  const upcomingTrips = [
    {
      id: 1,
      destination: 'Santorini, Greece',
      dates: 'Oct 15-22, 2024',
      image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      status: 'Confirmed',
      daysLeft: 23
    },
    {
      id: 2,
      destination: 'Kyoto, Japan',
      dates: 'Nov 5-12, 2024',
      image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      status: 'Planning',
      daysLeft: 44
    }
  ];

  const pastTrips = [
    {
      id: 3,
      destination: 'Machu Picchu, Peru',
      dates: 'Aug 10-17, 2024',
      image: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      rating: 5,
      photos: 127
    },
    {
      id: 4,
      destination: 'Iceland Ring Road',
      dates: 'Jun 20-30, 2024',
      image: 'https://images.unsplash.com/photo-1539066909543-e6217c3c7e1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      rating: 5,
      photos: 89
    }
  ];

  const wishlistTrips = [
    {
      id: 5,
      destination: 'Maldives',
      estimatedCost: '$3,500',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      priority: 'High'
    },
    {
      id: 6,
      destination: 'Norwegian Fjords',
      estimatedCost: '$2,800',
      image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      priority: 'Medium'
    }
  ];

  const renderUpcomingTrips = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {upcomingTrips.map((trip) => (
        <div key={trip.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
          <div className="relative h-48">
            <img src={trip.image} alt={trip.destination} className="w-full h-full object-cover" />
            <div className="absolute top-4 left-4">
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                trip.status === 'Confirmed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
              }`}>
                {trip.status}
              </span>
            </div>
            <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-medium text-gray-700">
              {trip.daysLeft} days left
            </div>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{trip.destination}</h3>
            <p className="text-gray-600 mb-4">{trip.dates}</p>
            <div className="flex space-x-3">
              <button className="flex-1 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                View Details
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                Edit
              </button>
            </div>
          </div>
        </div>
      ))}
      
      {/* Add New Trip Card */}
      <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-xl p-6 flex flex-col items-center justify-center hover:border-indigo-400 hover:bg-indigo-50 transition-colors cursor-pointer">
        <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
          <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Plan New Trip</h3>
        <p className="text-gray-600 text-center">Start planning your next adventure</p>
      </div>
    </div>
  );

  const renderPastTrips = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {pastTrips.map((trip) => (
        <div key={trip.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
          <div className="relative h-48">
            <img src={trip.image} alt={trip.destination} className="w-full h-full object-cover" />
            <div className="absolute top-4 right-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
              {trip.photos} photos
            </div>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{trip.destination}</h3>
            <p className="text-gray-600 mb-3">{trip.dates}</p>
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400">
                {[...Array(trip.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="ml-2 text-gray-600">({trip.rating}/5)</span>
            </div>
            <div className="flex space-x-3">
              <button className="flex-1 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
                View Photos
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                Share
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderWishlist = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {wishlistTrips.map((trip) => (
        <div key={trip.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
          <div className="relative h-48">
            <img src={trip.image} alt={trip.destination} className="w-full h-full object-cover" />
            <div className="absolute top-4 left-4">
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                trip.priority === 'High' ? 'bg-red-100 text-red-800' : 'bg-blue-100 text-blue-800'
              }`}>
                {trip.priority} Priority
              </span>
            </div>
            <div className="absolute top-4 right-4">
              <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100">
                <svg className="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{trip.destination}</h3>
            <p className="text-gray-600 mb-4">Est. Cost: {trip.estimatedCost}</p>
            <div className="flex space-x-3">
              <button className="flex-1 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                Start Planning
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                Remove
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">My Trips</h1>
          <p className="text-gray-600">Manage your travel adventures</p>
        </div>

        {/* Tabs */}
        <div className="mb-8">
          <nav className="flex space-x-8">
            {[
              { id: 'upcoming', label: 'Upcoming', count: upcomingTrips.length },
              { id: 'past', label: 'Past Trips', count: pastTrips.length },
              { id: 'wishlist', label: 'Wishlist', count: wishlistTrips.length }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`pb-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab.id
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.label} ({tab.count})
              </button>
            ))}
          </nav>
        </div>

        {/* Content */}
        <div>
          {activeTab === 'upcoming' && renderUpcomingTrips()}
          {activeTab === 'past' && renderPastTrips()}
          {activeTab === 'wishlist' && renderWishlist()}
        </div>
      </div>
    </div>
  );
}