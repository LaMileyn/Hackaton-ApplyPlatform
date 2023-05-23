import { Button, Container, Heading } from '@/app/components';
import { IoIosArrowBack } from 'react-icons/io';
import ProfileHeader from '../../../components/ProfileHeader';
import ResumeHeader from './components/ResumeHeader';
import ResumeBody from './components/ResumeBody';

const ResumePage = () => {
  // get the data
  return (
    <Container>
      <ResumeHeader />
      <ResumeBody />
    </Container>
  );
};

export default ResumePage;
