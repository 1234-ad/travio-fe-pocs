# Travio - Travel Companion App

A comprehensive travel application built with Next.js 15, React 19, and Tailwind CSS, designed to help users discover destinations, plan trips, and connect with the travel community.

## 🌟 Features

### 🔐 Authentication
- **Login Page** - User authentication with email/password
- **Sign Up Page** - New user registration with form validation
- **Responsive Design** - Mobile-first authentication forms

### 🏠 Dashboard & Home
- **Hero Section** - Inspiring call-to-action with gradient background
- **Featured Destinations** - Curated travel destinations with images and descriptions
- **Travel Categories** - Quick access to different types of travel experiences
- **Recent Activity** - Community feed showing user activities

### 🎒 Trip Management
- **My Trips** - Comprehensive trip management with three tabs:
  - **Upcoming Trips** - View and manage planned adventures
  - **Past Trips** - Browse completed journeys with ratings and photos
  - **Wishlist** - Save destinations for future planning
- **Trip Planning** - Add new trips with detailed information
- **Trip Status Tracking** - Visual indicators for trip status

### 🎧 Podcasts & Community
- **Featured Podcasts** - Discover travel podcasts by category
- **Recent Episodes** - Latest podcast episodes with play functionality
- **Category Filtering** - Filter podcasts by travel interests
- **Podcast Player UI** - Intuitive audio player interface

### 🔍 Search & Discovery
- **Advanced Search** - Search destinations, trips, and experiences
- **Smart Filters** - Filter by type, budget, duration, and season
- **Search Results** - Detailed results with ratings, pricing, and descriptions
- **Popular Searches** - Quick access to trending search terms

### 📂 Categories
- **Interactive Categories** - 8 travel categories with visual selection
- **Category Details** - Detailed view of each category with featured trips
- **Trip Listings** - Browse trips by category with difficulty levels
- **Visual Indicators** - Color-coded categories and difficulty ratings

### 👤 User Profile
- **Profile Overview** - User stats and travel achievements
- **Travel Preferences** - Customizable travel interests
- **Activity Tracking** - Trip counts and countries visited
- **Profile Management** - Edit profile and settings

## 🛠 Tech Stack

- **Framework**: Next.js 15.5.3 with App Router
- **React**: React 19.1.0 with modern hooks
- **Styling**: Tailwind CSS 4 with custom components
- **TypeScript**: Full type safety throughout the application
- **Build Tool**: Turbopack for fast development and builds

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── dashboard/         # Main dashboard page
│   ├── trips/            # Trip management pages
│   ├── community/        # Podcasts and community
│   ├── essentials/       # Travel categories
│   ├── search/           # Search functionality
│   ├── profile/          # User profile
│   ├── login/            # Authentication
│   ├── signup/           # User registration
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Landing page
│   └── globals.css       # Global styles
├── components/
│   ├── auth/             # Authentication components
│   │   ├── LoginForm.tsx
│   │   └── SignUpForm.tsx
│   ├── layout/           # Layout components
│   │   └── Header.tsx
│   ├── travel/           # Travel-related components
│   │   ├── HomePage.tsx
│   │   ├── MyTripsPage.tsx
│   │   ├── PodcastsPage.tsx
│   │   ├── SearchPage.tsx
│   │   └── CategoriesPage.tsx
│   └── ui/               # Reusable UI components
├── context/              # React Context providers
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
└── styles/               # Additional styles
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/1234-ad/travio-fe-pocs.git
   cd travio-fe-pocs
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 🎨 Design System

### Color Palette
- **Primary**: Indigo (600, 700)
- **Secondary**: Purple, Pink gradients
- **Success**: Green (600)
- **Warning**: Yellow (500)
- **Error**: Red (600)
- **Neutral**: Gray scale (50-900)

### Components
- **Buttons**: Primary, secondary, and ghost variants
- **Cards**: Elevated cards with hover effects
- **Forms**: Consistent input styling with focus states
- **Navigation**: Responsive header with mobile menu

### Typography
- **Font**: Inter (system fallback)
- **Headings**: Bold weights with proper hierarchy
- **Body**: Regular weight with good contrast

## 📱 Responsive Design

- **Mobile First**: Designed for mobile devices first
- **Breakpoints**: 
  - `sm`: 640px
  - `md`: 768px  
  - `lg`: 1024px
  - `xl`: 1280px
- **Grid System**: CSS Grid and Flexbox for layouts
- **Touch Friendly**: Appropriate touch targets and spacing

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production with Turbopack
- `npm start` - Start production server
- `npm run lint` - Run ESLint

### Code Style
- **ESLint**: Configured with Next.js recommended rules
- **TypeScript**: Strict mode enabled
- **Prettier**: Code formatting (recommended)

## 🌐 Pages Overview

1. **Landing Page** (`/`) - Hero section with app introduction
2. **Dashboard** (`/dashboard`) - Main app interface with featured content
3. **Login** (`/login`) - User authentication
4. **Sign Up** (`/signup`) - User registration
5. **My Trips** (`/trips`) - Trip management interface
6. **Podcasts** (`/community`) - Travel podcast discovery
7. **Categories** (`/essentials`) - Travel category exploration
8. **Search** (`/search`) - Advanced search functionality
9. **Profile** (`/profile`) - User profile management

## 🎯 Key Features Implemented

✅ **Complete Authentication Flow**
✅ **Responsive Navigation Header**
✅ **Interactive Trip Management**
✅ **Podcast Discovery Platform**
✅ **Advanced Search with Filters**
✅ **Category-based Trip Browsing**
✅ **User Profile Management**
✅ **Mobile-Responsive Design**
✅ **Modern UI/UX with Tailwind CSS**
✅ **TypeScript Integration**

## 🚧 Future Enhancements

- [ ] Backend API integration
- [ ] Real authentication system
- [ ] Payment processing for bookings
- [ ] Real-time chat functionality
- [ ] Push notifications
- [ ] Offline support with PWA
- [ ] Social media integration
- [ ] Advanced trip planning tools
- [ ] Booking system integration
- [ ] Review and rating system

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

For support, email support@travio.com or create an issue in the repository.

---

**Built with ❤️ using Next.js, React, and Tailwind CSS**