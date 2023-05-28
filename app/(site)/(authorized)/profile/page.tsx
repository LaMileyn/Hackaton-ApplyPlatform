import { ClientOnly, Container } from '@/app/components';
import ProfileHeader from './components/ProfileHeader';
import ResumesList from './components/ResumesList/ResumesList';

const ProfilePage = () => {
  return (
    <ClientOnly>
      <Container>
        <div className="py-14">
          <ProfileHeader />
          <ResumesList />
        </div>
      </Container>
    </ClientOnly>
  );
};

export default ProfilePage;
