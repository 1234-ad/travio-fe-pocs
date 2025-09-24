'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/layout/Header';
import Link from 'next/link';

interface ProfileData {
  name: string;
  dateOfBirth: string;
  gender: string;
  bio: string;
  interests: string[];
  languages: string[];
  travelStyle: string[];
  profilePicture: string | null;
  memberSince: string;
  tripsCompleted: number;
  countriesVisited: number;
  upcomingTrips: number;
}

export default function ProfilePage() {
  const [profileData, setProfileData] = useState<ProfileData | null>(null);
  const [isSetupComplete, setIsSetupComplete] = useState(false);

  useEffect(() => {
    // Check if profile setup is complete
    const savedProfile = localStorage.getItem('travioProfile');
    if (savedProfile) {
      const profile = JSON.parse(savedProfile);
      setProfileData(profile);
      setIsSetupComplete(true);
    } else {
      // Default data for demo purposes
      setProfileData({
        name: 'John Traveler',
        dateOfBirth: '1990-05-15',
        gender: 'male',
        bio: 'Passionate traveler who loves exploring new cultures, trying local cuisines, and capturing beautiful moments. Always planning the next adventure!',
        interests: ['Adventure', 'Cultural', 'Photography', 'Food & Drink'],
        languages: ['English', 'Spanish', 'French'],
        travelStyle: ['Solo Traveler', 'Adventure Travel', 'Cultural Immersion'],
        profilePicture: null,
        memberSince: 'January 2024',
        tripsCompleted: 12,
        countriesVisited: 15,
        upcomingTrips: 3
      });
    }
  }, []);

  const calculateAge = (dateOfBirth: string) => {
    const today = new Date();
    const birthDate = new Date(dateOfBirth);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  if (!profileData) {
    return (
      <div>
        <Header />
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#368F8B] mx-auto mb-4"></div>
            <p className="text-gray-600">Loading profile...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Profile Setup Banner */}
          {!isSetupComplete && (
            <div className="bg-[#368F8B] text-white rounded-xl p-6 mb-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-semibold mb-2">Complete Your Profile Setup</h2>
                  <p className="text-[#a8d5d3]">
                    Set up your profile to connect with other travelers and get personalized recommendations
                  </p>
                </div>
                <Link
                  href="/profile/setup"
                  className="bg-white text-[#368F8B] px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                >
                  Setup Profile
                </Link>
              </div>
            </div>
          )}

          <div className="bg-white rounded-xl shadow-lg p-8">
            {/* Profile Header */}
            <div className="flex items-center space-x-6 mb-8">
              <div className="relative">
                <div className="h-24 w-24 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
                  {profileData.profilePicture ? (
                    <img
                      className="h-full w-full object-cover"
                      src={profileData.profilePicture}
                      alt="Profile"
                    />
                  ) : (
                    <svg className="h-12 w-12 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  )}
                </div>
              </div>
              <div className="flex-1">
                <h1 className="text-3xl font-bold text-gray-900">{profileData.name}</h1>
                <p className="text-gray-600">
                  {profileData.gender && `${profileData.gender.charAt(0).toUpperCase() + profileData.gender.slice(1)} • `}
                  {profileData.dateOfBirth && `${calculateAge(profileData.dateOfBirth)} years old • `}
                  {profileData.countriesVisited} Countries Visited
                </p>
                <p className="text-sm text-gray-500">Member since {profileData.memberSince}</p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-[#368F8B]">{profileData.tripsCompleted}</div>
                <div className="text-gray-600">Trips Completed</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-green-600">{profileData.countriesVisited}</div>
                <div className="text-gray-600">Countries Visited</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-purple-600">{profileData.upcomingTrips}</div>
                <div className="text-gray-600">Upcoming Trips</div>
              </div>
            </div>

            <div className="space-y-6">
              {/* Bio */}
              {profileData.bio && (
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">About</h2>
                  <p className="text-gray-600">{profileData.bio}</p>
                </div>
              )}

              {/* Travel Interests */}
              {profileData.interests.length > 0 && (
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Travel Interests</h2>
                  <div className="flex flex-wrap gap-2">
                    {profileData.interests.map((interest, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-[#368F8B] bg-opacity-10 text-[#368F8B] rounded-full text-sm font-medium"
                      >
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Languages */}
              {profileData.languages.length > 0 && (
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Languages</h2>
                  <div className="flex flex-wrap gap-2">
                    {profileData.languages.map((language, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                      >
                        {language}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Travel Style */}
              {profileData.travelStyle.length > 0 && (
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Travel Style</h2>
                  <div className="flex flex-wrap gap-2">
                    {profileData.travelStyle.map((style, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium"
                      >
                        {style}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex space-x-4 pt-4">
                <Link
                  href="/profile/setup"
                  className="bg-[#368F8B] text-white px-6 py-2 rounded-lg hover:bg-[#2a6f6b] transition-colors font-medium"
                >
                  {isSetupComplete ? 'Edit Profile' : 'Complete Setup'}
                </Link>
                <button className="border border-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-50 transition-colors font-medium">
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