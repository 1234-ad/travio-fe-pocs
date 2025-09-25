'use client';

import { useState } from 'react';

export default function SignUpForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    console.log('Signup attempt:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Decorative geometric patterns */}
      <div className="absolute top-0 left-0 w-32 h-32 opacity-20">
        <div className="grid grid-cols-2 gap-2 w-full h-full">
          <div className="bg-white rounded-full"></div>
          <div className="bg-white rounded-full"></div>
          <div className="bg-white rounded-full"></div>
          <div className="bg-white rounded-full"></div>
        </div>
      </div>
      
      <div className="absolute bottom-0 right-0 w-40 h-40 opacity-20">
        <div className="grid grid-cols-3 gap-2 w-full h-full">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="bg-white rounded-full"></div>
          ))}
        </div>
      </div>

      {/* Main container */}
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden max-w-5xl w-full flex min-h-[700px]">
        {/* Left side - Hero image and branding */}
        <div className="flex-1 bg-gradient-to-br from-blue-600 to-blue-800 relative overflow-hidden hidden lg:flex flex-col justify-center items-center text-white p-12">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white rounded-full"></div>
            <div className="absolute top-32 right-16 w-16 h-16 border-2 border-white rounded-full"></div>
            <div className="absolute bottom-20 left-20 w-12 h-12 border-2 border-white rounded-full"></div>
          </div>
          
          {/* Hero content */}
          <div className="relative z-10 text-center mb-8">
            <h1 className="text-4xl font-bold mb-4 font-serif italic">
              Travellista Tours
            </h1>
            <p className="text-lg opacity-90 max-w-md">
              Join thousands of travelers discovering amazing destinations around the world
            </p>
          </div>
          
          {/* Hero image placeholder - Different travel scene for signup */}
          <div className="relative w-80 h-64 rounded-2xl overflow-hidden shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-t from-purple-400 via-pink-300 to-orange-200">
              {/* Beach/ocean scene */}
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-blue-500 via-blue-400 to-transparent"></div>
              
              {/* Palm tree */}
              <div className="absolute bottom-16 right-12">
                <div className="w-2 h-16 bg-amber-800"></div>
                <div className="absolute -top-4 -left-3 w-8 h-8 bg-green-600 rounded-full"></div>
                <div className="absolute -top-2 -left-4 w-6 h-6 bg-green-500 rounded-full"></div>
                <div className="absolute -top-3 left-1 w-6 h-6 bg-green-500 rounded-full"></div>
              </div>
              
              {/* Traveler with backpack */}
              <div className="absolute bottom-20 left-1/3 transform -translate-x-1/2">
                <div className="w-6 h-12 bg-blue-400 rounded-t-full relative">
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-orange-200 rounded-full"></div>
                  <div className="absolute -top-1 -left-1 w-4 h-6 bg-orange-600 rounded-lg"></div>
                </div>
              </div>
              
              {/* Sun */}
              <div className="absolute top-6 right-8 w-12 h-12 bg-yellow-300 rounded-full opacity-80"></div>
              
              {/* Birds */}
              <div className="absolute top-12 left-16 text-white opacity-60">
                <div className="text-xs">⌒ ⌒</div>
              </div>
            </div>
          </div>
          
          {/* Travel icons at bottom */}
          <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-8 opacity-30">
            {/* Compass */}
            <div className="w-12 h-12 bg-white rounded-full relative">
              <div className="absolute inset-2 border-2 border-blue-600 rounded-full"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-4 bg-blue-600"></div>
            </div>
            
            {/* Camera */}
            <div className="w-14 h-10 bg-white rounded relative">
              <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-6 h-6 border-2 border-blue-600 rounded-full"></div>
              <div className="absolute top-0 right-2 w-2 h-2 bg-blue-600 rounded"></div>
            </div>
            
            {/* Suitcase */}
            <div className="w-10 h-12 bg-white rounded relative">
              <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-6 h-2 bg-blue-600 rounded"></div>
              <div className="absolute top-3 left-2 w-2 h-2 bg-blue-600"></div>
              <div className="absolute top-3 right-2 w-2 h-2 bg-blue-600"></div>
            </div>
          </div>
        </div>

        {/* Right side - Signup form */}
        <div className="flex-1 p-12 flex flex-col justify-center max-w-md mx-auto w-full">
          {/* Airplane icon */}
          <div className="flex justify-end mb-6">
            <div className="w-8 h-8 text-blue-500">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
              </svg>
            </div>
          </div>

          {/* Welcome header */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-blue-600 mb-2">Join Us</h2>
            <p className="text-gray-600">Create your travel account</p>
          </div>

          {/* Signup form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name field */}
            <div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="block w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Email field */}
            <div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                  </svg>
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="block w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Password field */}
            <div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="block w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Confirm Password field */}
            <div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  required
                  className="block w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Terms and conditions */}
            <div className="flex items-start space-x-3">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                required
                className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="terms" className="text-sm text-gray-600">
                I agree to the{' '}
                <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
                  Terms of Service
                </a>{' '}
                and{' '}
                <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
                  Privacy Policy
                </a>
              </label>
            </div>

            {/* Create Account button */}
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
            >
              CREATE ACCOUNT
            </button>

            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-gray-500">OR</span>
              </div>
            </div>

            {/* Social signup buttons */}
            <div className="flex space-x-4">
              {/* Google */}
              <button
                type="button"
                className="flex-1 flex items-center justify-center px-4 py-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
              </button>

              {/* Facebook */}
              <button
                type="button"
                className="flex-1 flex items-center justify-center px-4 py-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors"
              >
                <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </button>

              {/* Apple */}
              <button
                type="button"
                className="flex-1 flex items-center justify-center px-4 py-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
              </button>
            </div>

            {/* Login link */}
            <div className="text-center mt-6">
              <span className="text-gray-600">Already have an account? </span>
              <a href="/login" className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                Sign In
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}