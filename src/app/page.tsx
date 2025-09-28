import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 flex items-center justify-center p-4">
      <div className="text-center text-white">
        <h1 className="text-6xl md:text-8xl font-light italic mb-4">Travio</h1>
        <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-md mx-auto">
          Travel is the only purchase that enriches you in ways beyond material wealth
        </p>
        
        <div className="space-y-4">
          <Link 
            href="/login"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Get Started
          </Link>
          <div className="text-sm opacity-75">
            <Link href="/signup" className="hover:underline">
              New to Travio? Sign up here
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}