import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full bg-gray-100 py-4 px-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gray-800">
          Travio
        </Link>
        
        <div className="flex space-x-4">
          <Link 
            href="/login" 
            className="px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
          >
            Log in
          </Link>
          <Link 
            href="/signup" 
            className="px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
          >
            Sign up
          </Link>
        </div>
      </div>
    </header>
  );
}