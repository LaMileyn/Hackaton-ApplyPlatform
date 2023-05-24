import { Container } from '@/app/components';
import ResumeClient from './components/ResumeClient/ResumeClient';
import { Resume } from '@/app/types/resumes/models';
import { blocksData } from './components/ResumeClient/store';

const ResumePage = () => {
  const resume: Resume = {
    aboutMe: 'About me',
    id: '1',
    blocks: blocksData,
    title: 'Interview resume',
    username: 'Andrey Minnihanov',
  };

  return (
    <Container>
      <ResumeClient resume={resume} />
    </Container>
  );
};

export default ResumePage;
