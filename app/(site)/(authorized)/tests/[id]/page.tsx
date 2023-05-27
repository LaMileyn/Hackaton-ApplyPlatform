import { Button, Container } from '@/app/components';
import { IoIosArrowBack } from 'react-icons/io';

const TestPage = () => {
  return (
    <Container>
      <div className="mb-3">
        <Button
          className=""
          variant="transparent"
          iconLeft={<IoIosArrowBack />}
        >
          Назад
        </Button>
      </div>
    </Container>
  );
};

export default TestPage;
