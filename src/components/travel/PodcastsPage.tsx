'use client';

import { useState } from 'react';

export default function PodcastsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Categories' },
    { id: 'adventure', name: 'Adventure' },
    { id: 'culture', name: 'Culture' },
    { id: 'food', name: 'Food & Drink' },
    { id: 'budget', name: 'Budget Travel' },
    { id: 'luxury', name: 'Luxury Travel' }
  ];

  const featuredPodcasts = [
    {
      id: 1,
      title: 'The Travel Diaries',
      host: 'Sarah Mitchell',
      description: 'Stories from around the world, one destination at a time',
      image: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      episodes: 127,
      rating: 4.8,
      category: 'adventure'
    },
    {
      id: 2,
      title: 'Nomad Life',
      host: 'Alex Chen',
      description: 'Digital nomad tips and remote work adventures',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      episodes: 89,
      rating: 4.9,
      category: 'culture'
    },
    {
      id: 3,
      title: 'Foodie Adventures',
      host: 'Maria Rodriguez',
      description: 'Culinary journeys across continents',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      episodes: 156,
      rating: 4.7,
      category: 'food'
    }
  ];

  const recentEpisodes = [
    {
      id: 1,
      title: 'Exploring the Hidden Gems of Patagonia',
      podcast: 'The Travel Diaries',
      duration: '45:32',
      publishedAt: '2 days ago',
      image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      description: 'Join us as we trek through the breathtaking landscapes of Patagonia and discover remote villages...'
    },
    {
      id: 2,
      title: 'Working from Bali: A Digital Nomad Guide',
      podcast: 'Nomad Life',
      duration: '38:15',
      publishedAt: '4 days ago',
      image: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      description: 'Everything you need to know about setting up your remote work life in Bali...'
    },
    {
      id: 3,
      title: 'Street Food Tour: Bangkok Edition',
      podcast: 'Foodie Adventures',
      duration: '52:18',
      publishedAt: '1 week ago',
      image: 'https://images.unsplash.com/photo-1563379091339-03246963d51a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      description: 'Dive into the vibrant street food scene of Bangkok with local food experts...'
    },
    {
      id: 4,
      title: 'Budget Backpacking Through Europe',
      podcast: 'The Travel Diaries',
      duration: '41:27',
      publishedAt: '1 week ago',
      image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      description: 'Tips and tricks for exploring Europe on a shoestring budget...'
    }
  ];

  const filteredPodcasts = selectedCategory === 'all' 
    ? featuredPodcasts 
    : featuredPodcasts.filter(podcast => podcast.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Podcasts</h1>
          <p className="text-gray-600">Discover travel stories, tips, and inspiration from fellow adventurers</p>
        </div>

        {/* Categories */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-indigo-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Podcasts */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Podcasts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPodcasts.map((podcast) => (
              <div key={podcast.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <img src={podcast.image} alt={podcast.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <button className="bg-white rounded-full p-4 hover:bg-gray-100 transition-colors">
                      <svg className="w-8 h-8 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{podcast.title}</h3>
                  <p className="text-indigo-600 font-medium mb-2">by {podcast.host}</p>
                  <p className="text-gray-600 mb-4">{podcast.description}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{podcast.episodes} episodes</span>
                    <div className="flex items-center">
                      <svg className="w-4 h-4 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span>{podcast.rating}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Episodes */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Episodes</h2>
          <div className="space-y-6">
            {recentEpisodes.map((episode) => (
              <div key={episode.id} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <img 
                      src={episode.image} 
                      alt={episode.title}
                      className="w-full md:w-32 h-32 object-cover rounded-lg"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-1">{episode.title}</h3>
                        <p className="text-indigo-600 font-medium">{episode.podcast}</p>
                      </div>
                      <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors flex items-center">
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                        </svg>
                        Play
                      </button>
                    </div>
                    <p className="text-gray-600 mb-3">{episode.description}</p>
                    <div className="flex items-center text-sm text-gray-500 space-x-4">
                      <span>{episode.duration}</span>
                      <span>•</span>
                      <span>{episode.publishedAt}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="bg-white text-gray-700 px-8 py-3 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors">
            Load More Episodes
          </button>
        </div>
      </div>
    </div>
  );
}