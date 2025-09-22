import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500">
      <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Logo */}
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold mb-4">Travio</h1>
            <p className="text-xl md:text-2xl opacity-90">Your Ultimate Travel Companion</p>
          </div>

          {/* Hero Content */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Discover Your Next Adventure
            </h2>
            <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto mb-8">
              Explore amazing destinations, plan perfect trips, connect with fellow travelers, 
              and create unforgettable memories with our comprehensive travel platform.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-semibold mb-2">Discover Destinations</h3>
              <p className="opacity-90">Explore hundreds of amazing destinations worldwide</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-4xl mb-4">🎒</div>
              <h3 className="text-xl font-semibold mb-2">Plan Your Trips</h3>
              <p className="opacity-90">Create detailed itineraries and manage your adventures</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-4xl mb-4">🎧</div>
              <h3 className="text-xl font-semibold mb-2">Travel Podcasts</h3>
              <p className="opacity-90">Listen to inspiring travel stories and tips</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link 
              href="/dashboard" 
              className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              Explore Now
            </Link>
            <Link 
              href="/login" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-indigo-600 transition-colors"
            >
              Sign In
            </Link>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm opacity-75">
            <Link href="/trips" className="hover:opacity-100 transition-opacity">My Trips</Link>
            <Link href="/community" className="hover:opacity-100 transition-opacity">Podcasts</Link>
            <Link href="/essentials" className="hover:opacity-100 transition-opacity">Categories</Link>
            <Link href="/profile" className="hover:opacity-100 transition-opacity">Profile</Link>
          </div>
        </div>
      </div>
    </div>
  );
}