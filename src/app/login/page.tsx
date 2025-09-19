import Header from '@/components/layout/Header';
import LoginForm from '@/components/auth/LoginForm';
import StickyNote from '@/components/ui/StickyNote';

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="flex-1 flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-6xl mx-auto flex items-center justify-between gap-12">
          {/* Left side - Sticky Note */}
          <div className="hidden lg:flex flex-1 justify-center">
            <StickyNote />
          </div>
          
          {/* Right side - Login Form */}
          <div className="flex-1 max-w-md mx-auto lg:mx-0">
            <LoginForm />
          </div>
        </div>
      </main>
    </div>
  );
}