'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import ImageCropper from './ImageCropper';

interface ProfileFormData {
  name: string;
  dateOfBirth: string;
  gender: string;
  bio: string;
  interests: string[];
  languages: string[];
  travelStyle: string[];
  profilePicture: string | null;
}

const INTEREST_SUGGESTIONS = [
  'Adventure', 'Cultural', 'Photography', 'Food & Drink', 'Nature', 'History',
  'Art & Museums', 'Nightlife', 'Shopping', 'Sports', 'Beach', 'Mountains',
  'Wildlife', 'Architecture', 'Music', 'Festivals', 'Backpacking', 'Luxury Travel'
];

const LANGUAGE_OPTIONS = [
  'English', 'Spanish', 'French', 'German', 'Italian', 'Portuguese', 'Chinese',
  'Japanese', 'Korean', 'Arabic', 'Russian', 'Hindi', 'Dutch', 'Swedish'
];

const TRAVEL_STYLE_OPTIONS = [
  'Solo Traveler', 'Group Travel', 'Family Travel', 'Couple Travel',
  'Budget Travel', 'Luxury Travel', 'Adventure Travel', 'Cultural Immersion',
  'Business Travel', 'Digital Nomad', 'Backpacking', 'Road Trips'
];

export default function ProfileSetupForm() {
  const router = useRouter();
  const [formData, setFormData] = useState<ProfileFormData>({
    name: '',
    dateOfBirth: '',
    gender: '',
    bio: '',
    interests: [],
    languages: [],
    travelStyle: [],
    profilePicture: null
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showImageCropper, setShowImageCropper] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showInterestSuggestions, setShowInterestSuggestions] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Load existing profile data if available
  useEffect(() => {
    const savedProfile = localStorage.getItem('travioProfile');
    if (savedProfile) {
      const profile = JSON.parse(savedProfile);
      setFormData({
        name: profile.name || '',
        dateOfBirth: profile.dateOfBirth || '',
        gender: profile.gender || '',
        bio: profile.bio || '',
        interests: profile.interests || [],
        languages: profile.languages || [],
        travelStyle: profile.travelStyle || [],
        profilePicture: profile.profilePicture || null
      });
    }
  }, []);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.dateOfBirth) {
      newErrors.dateOfBirth = 'Date of birth is required';
    } else {
      const birthDate = new Date(formData.dateOfBirth);
      const today = new Date();
      const age = today.getFullYear() - birthDate.getFullYear();
      if (age < 13) {
        newErrors.dateOfBirth = 'You must be at least 13 years old';
      }
    }

    if (!formData.gender) {
      newErrors.gender = 'Gender is required';
    }

    if (formData.bio.length > 500) {
      newErrors.bio = 'Bio must be less than 500 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);

    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Save to localStorage (in real app, this would be an API call)
      const profileData = {
        ...formData,
        memberSince: 'January 2024',
        tripsCompleted: 0,
        countriesVisited: 0,
        upcomingTrips: 0,
        setupComplete: true
      };

      localStorage.setItem('travioProfile', JSON.stringify(profileData));

      // Redirect to profile page
      router.push('/profile');
    } catch (error) {
      console.error('Error saving profile:', error);
      alert('Error saving profile. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleArrayFieldChange = (field: keyof ProfileFormData, value: string) => {
    setFormData(prev => {
      const currentArray = prev[field] as string[];
      const newArray = currentArray.includes(value)
        ? currentArray.filter(item => item !== value)
        : [...currentArray, value];
      
      return {
        ...prev,
        [field]: newArray
      };
    });
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert('File size must be less than 5MB');
        return;
      }

      // Validate file type
      if (!file.type.startsWith('image/')) {
        alert('Please select a valid image file');
        return;
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string);
        setShowImageCropper(true);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCroppedImage = (croppedImage: string) => {
    setFormData(prev => ({
      ...prev,
      profilePicture: croppedImage
    }));
    setShowImageCropper(false);
    setSelectedImage(null);
  };

  const getSuggestedInterests = () => {
    // AI-like interest suggestions based on current interests
    const currentInterests = formData.interests;
    const suggestions = INTEREST_SUGGESTIONS.filter(interest => 
      !currentInterests.includes(interest)
    ).slice(0, 6);
    
    return suggestions;
  };

  const removeProfilePicture = () => {
    setFormData(prev => ({
      ...prev,
      profilePicture: null
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-4 sm:py-8">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-lg p-4 sm:p-8">
          <div className="text-center mb-6 sm:mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Setup Your Profile</h1>
            <p className="text-gray-600 text-sm sm:text-base">Tell other travelers about yourself and your travel preferences</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Profile Picture */}
            <div className="text-center">
              <div className="mb-4">
                <div className="relative inline-block">
                  <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                    {formData.profilePicture ? (
                      <img 
                        src={formData.profilePicture} 
                        alt="Profile" 
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <svg className="w-12 h-12 sm:w-16 sm:h-16 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="absolute bottom-0 right-0 bg-[#368F8B] text-white rounded-full p-2 hover:bg-[#2a6f6b] transition-colors"
                  >
                    <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </button>
                  {formData.profilePicture && (
                    <button
                      type="button"
                      onClick={removeProfilePicture}
                      className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors"
                    >
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  )}
                </div>
              </div>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
              <p className="text-sm text-gray-500">Upload a profile picture (optional)</p>
              <p className="text-xs text-gray-400 mt-1">Max size: 5MB • Supported: JPG, PNG, GIF</p>
            </div>

            {/* Personal Details */}
            <div className="space-y-4">
              <h2 className="text-lg sm:text-xl font-semibold text-gray-900">Personal Details</h2>
              
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#368F8B] focus:border-[#368F8B] text-sm sm:text-base ${
                    errors.name ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter your full name"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700 mb-1">
                    Date of Birth *
                  </label>
                  <input
                    type="date"
                    id="dateOfBirth"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#368F8B] focus:border-[#368F8B] text-sm sm:text-base ${
                      errors.dateOfBirth ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.dateOfBirth && <p className="text-red-500 text-sm mt-1">{errors.dateOfBirth}</p>}
                </div>

                <div>
                  <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-1">
                    Gender *
                  </label>
                  <select
                    id="gender"
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#368F8B] focus:border-[#368F8B] text-sm sm:text-base ${
                      errors.gender ? 'border-red-500' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Select gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="non-binary">Non-binary</option>
                    <option value="prefer-not-to-say">Prefer not to say</option>
                  </select>
                  {errors.gender && <p className="text-red-500 text-sm mt-1">{errors.gender}</p>}
                </div>
              </div>
            </div>

            {/* Bio */}
            <div>
              <label htmlFor="bio" className="block text-sm font-medium text-gray-700 mb-1">
                Bio (Optional)
              </label>
              <textarea
                id="bio"
                name="bio"
                rows={4}
                value={formData.bio}
                onChange={handleInputChange}
                maxLength={500}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#368F8B] focus:border-[#368F8B] text-sm sm:text-base ${
                  errors.bio ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Tell other travelers about yourself..."
              />
              <div className="flex justify-between items-center mt-1">
                <p className="text-sm text-gray-500">{formData.bio.length}/500 characters</p>
                {errors.bio && <p className="text-red-500 text-sm">{errors.bio}</p>}
              </div>
            </div>

            {/* Interests */}
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-2">
                <label className="block text-sm font-medium text-gray-700">
                  Travel Interests
                </label>
                <button
                  type="button"
                  onClick={() => setShowInterestSuggestions(!showInterestSuggestions)}
                  className="text-sm text-[#368F8B] hover:text-[#2a6f6b] font-medium flex items-center self-start sm:self-auto"
                >
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                  AI Suggestions
                </button>
              </div>
              
              {showInterestSuggestions && (
                <div className="mb-4 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-gray-700 mb-2">✨ Suggested interests for you:</p>
                  <div className="flex flex-wrap gap-2">
                    {getSuggestedInterests().map((interest) => (
                      <button
                        key={interest}
                        type="button"
                        onClick={() => handleArrayFieldChange('interests', interest)}
                        className="px-3 py-1 bg-white border border-[#368F8B] text-[#368F8B] rounded-full text-sm hover:bg-[#368F8B] hover:text-white transition-colors"
                      >
                        + {interest}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex flex-wrap gap-2">
                {INTEREST_SUGGESTIONS.map((interest) => (
                  <button
                    key={interest}
                    type="button"
                    onClick={() => handleArrayFieldChange('interests', interest)}
                    className={`px-3 py-1 rounded-full text-sm transition-colors ${
                      formData.interests.includes(interest)
                        ? 'bg-[#368F8B] text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {interest}
                  </button>
                ))}
              </div>
              {formData.interests.length > 0 && (
                <p className="text-sm text-gray-500 mt-2">{formData.interests.length} interests selected</p>
              )}
            </div>

            {/* Languages */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Languages Spoken
              </label>
              <div className="flex flex-wrap gap-2">
                {LANGUAGE_OPTIONS.map((language) => (
                  <button
                    key={language}
                    type="button"
                    onClick={() => handleArrayFieldChange('languages', language)}
                    className={`px-3 py-1 rounded-full text-sm transition-colors ${
                      formData.languages.includes(language)
                        ? 'bg-[#368F8B] text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {language}
                  </button>
                ))}
              </div>
              {formData.languages.length > 0 && (
                <p className="text-sm text-gray-500 mt-2">{formData.languages.length} languages selected</p>
              )}
            </div>

            {/* Travel Style */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Travel Style
              </label>
              <div className="flex flex-wrap gap-2">
                {TRAVEL_STYLE_OPTIONS.map((style) => (
                  <button
                    key={style}
                    type="button"
                    onClick={() => handleArrayFieldChange('travelStyle', style)}
                    className={`px-3 py-1 rounded-full text-sm transition-colors ${
                      formData.travelStyle.includes(style)
                        ? 'bg-[#368F8B] text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {style}
                  </button>
                ))}
              </div>
              {formData.travelStyle.length > 0 && (
                <p className="text-sm text-gray-500 mt-2">{formData.travelStyle.length} travel styles selected</p>
              )}
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-[#368F8B] text-white py-3 px-4 rounded-md hover:bg-[#2a6f6b] focus:outline-none focus:ring-2 focus:ring-[#368F8B] focus:ring-offset-2 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center text-sm sm:text-base"
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Saving Profile...
                  </>
                ) : (
                  'Save Profile'
                )}
              </button>
            </div>

            {/* Back to Profile Link */}
            <div className="text-center pt-4">
              <button
                type="button"
                onClick={() => router.push('/profile')}
                className="text-sm text-gray-600 hover:text-gray-800 underline"
              >
                Back to Profile
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Image Cropper Modal */}
      {showImageCropper && selectedImage && (
        <ImageCropper
          image={selectedImage}
          onCrop={handleCroppedImage}
          onCancel={() => {
            setShowImageCropper(false);
            setSelectedImage(null);
          }}
        />
      )}
    </div>
  );
}