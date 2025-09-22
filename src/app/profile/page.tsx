import Header from '@/components/layout/Header';

export default function ProfilePage() {
  return (
    <div>
      <Header />
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center space-x-6 mb-8">
              <img
                className="h-24 w-24 rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="Profile"
              />
              <div>
                <h1 className="text-3xl font-bold text-gray-900">John Traveler</h1>
                <p className="text-gray-600">Adventure Seeker • 15 Countries Visited</p>
                <p className="text-sm text-gray-500">Member since January 2024</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-indigo-600">12</div>
                <div className="text-gray-600">Trips Completed</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-green-600">15</div>
                <div className="text-gray-600">Countries Visited</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-purple-600">3</div>
                <div className="text-gray-600">Upcoming Trips</div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">About</h2>
                <p className="text-gray-600">
                  Passionate traveler who loves exploring new cultures, trying local cuisines, 
                  and capturing beautiful moments. Always planning the next adventure!
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Travel Preferences</h2>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">Adventure</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Cultural</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Photography</span>
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">Food & Drink</span>
                </div>
              </div>

              <div className="flex space-x-4">
                <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                  Edit Profile
                </button>
                <button className="border border-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                  Settings
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}