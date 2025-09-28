'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function SignUpForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    console.log('Sign up attempt:', formData);
    // Add your signup logic here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Top left circles */}
        <div className="absolute top-8 left-8 w-16 h-16 bg-white/10 rounded-full"></div>
        <div className="absolute top-16 left-24 w-8 h-8 bg-white/10 rounded-full"></div>
        <div className="absolute top-32 left-12 w-12 h-12 bg-white/10 rounded-full"></div>
        
        {/* Bottom right circles */}
        <div className="absolute bottom-8 right-8 w-20 h-20 bg-white/10 rounded-full"></div>
        <div className="absolute bottom-24 right-24 w-10 h-10 bg-white/10 rounded-full"></div>
        <div className="absolute bottom-16 right-12 w-14 h-14 bg-white/10 rounded-full"></div>
        
        {/* Additional scattered circles */}
        <div className="absolute top-1/4 right-1/4 w-6 h-6 bg-white/10 rounded-full"></div>
        <div className="absolute bottom-1/3 left-1/3 w-8 h-8 bg-white/10 rounded-full"></div>
      </div>

      {/* Main container */}
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden max-w-5xl w-full flex min-h-[600px] relative z-10">
        {/* Left side - Branding */}
        <div className="flex-1 bg-gradient-to-br from-blue-600 to-blue-800 relative overflow-hidden hidden lg:flex flex-col justify-center items-center text-white p-12">
          {/* Background decorative icons */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute bottom-16 left-16 flex space-x-4">
              <div className="w-8 h-8 bg-white rounded opacity-60"></div>
              <div className="w-8 h-8 bg-white rounded opacity-60"></div>
              <div className="w-8 h-8 bg-white rounded opacity-60"></div>
            </div>
          </div>

          {/* Content */}
          <div className="text-center z-10">
            <h1 className="text-5xl font-light mb-6 italic">Travio</h1>
            <p className="text-lg opacity-90 mb-8 max-w-md">
              Travel is the only purchase that enriches you in ways beyond material wealth
            </p>
            
            {/* Hero image placeholder */}
            <div className="w-80 h-48 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl mx-auto shadow-lg relative overflow-hidden">
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <div className="h-2 bg-white/30 rounded mb-2"></div>
                <div className="h-2 bg-white/30 rounded w-3/4"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Sign up form */}
        <div className="flex-1 p-12 flex flex-col justify-center">
          <div className="max-w-md mx-auto w-full">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="flex items-center justify-center mb-4">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
              </div>
              <h2 className="text-3xl font-semibold text-blue-500 mb-2">Join Us</h2>
              <p className="text-gray-600">Create your account</p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Full Name"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                    </svg>
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Password"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm Password"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
              >
                REGISTER
              </button>
            </form>

            {/* Divider */}
            <div className="my-6 flex items-center">
              <div className="flex-1 border-t border-gray-300"></div>
              <span className="px-4 text-gray-500 text-sm">OR</span>
              <div className="flex-1 border-t border-gray-300"></div>
            </div>

            {/* Social login */}
            <div className="flex justify-center space-x-4 mb-6">
              <button className="w-12 h-12 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
                <span className="font-bold">G</span>
              </button>
              <button className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                <span className="font-bold">f</span>
              </button>
              <button className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors">
                <span className="font-bold">🍎</span>
              </button>
            </div>

            {/* Login link */}
            <div className="text-center">
              <span className="text-gray-600">Already have account? </span>
              <Link href="/login" className="text-blue-500 hover:text-blue-600 font-semibold">
                Login Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}