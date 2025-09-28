'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ForgotPasswordForm() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Password reset request for:', email);
    setIsSubmitted(true);
    // Add your password reset logic here
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

        {/* Right side - Forgot password form */}
        <div className="flex-1 p-12 flex flex-col justify-center">
          <div className="max-w-md mx-auto w-full">
            {!isSubmitted ? (
              <>
                {/* Header */}
                <div className="text-center mb-8">
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </div>
                  </div>
                  <h2 className="text-3xl font-semibold text-blue-500 mb-2">Reset Password</h2>
                  <p className="text-gray-600">Enter your email to reset password</p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                        </svg>
                      </div>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email address"
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
                  >
                    SEND RESET LINK
                  </button>
                </form>

                {/* Back to login link */}
                <div className="text-center mt-6">
                  <span className="text-gray-600">Remember your password? </span>
                  <Link href="/login" className="text-blue-500 hover:text-blue-600 font-semibold">
                    Back to Login
                  </Link>
                </div>
              </>
            ) : (
              /* Success message */
              <div className="text-center">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Check Your Email</h2>
                <p className="text-gray-600 mb-6">
                  We've sent a password reset link to <strong>{email}</strong>
                </p>
                <p className="text-sm text-gray-500 mb-8">
                  Didn't receive the email? Check your spam folder or try again.
                </p>
                <div className="space-y-4">
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
                  >
                    Try Again
                  </button>
                  <Link
                    href="/login"
                    className="block w-full text-center text-blue-500 hover:text-blue-600 font-semibold py-3"
                  >
                    Back to Login
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}