import Header from '@/components/layout/Header';
import ProfileSetupForm from '@/components/profile/ProfileSetupForm';

export default function ProfileSetupPage() {
  return (
    <div>
      <Header />
      <ProfileSetupForm />
    </div>
  );
}

export const metadata = {
  title: 'Setup Your Profile - Travio',
  description: 'Create and customize your travel profile to connect with other travelers and get personalized recommendations.',
};