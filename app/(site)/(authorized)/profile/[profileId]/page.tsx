import { Container } from '@/app/components';
import ProfileHeader from '../components/ProfileHeader/ProfileHeader';
import ResumesList from './components/ResumesList/ResumesList';

const ProfilePage = () => {
  return (
    <Container>
      <div className="py-14">
        <ProfileHeader />
        <ResumesList resumes={[]} />
      </div>
    </Container>
  );
};

export default ProfilePage;
