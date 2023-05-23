import { Button, Container } from '@/app/components';
import { IoIosArrowBack } from 'react-icons/io';
import ProfileHeader from '../../../components/ProfileHeader';

const ResumePage = () => {
  return (
    <Container>
      <div className="mb-4">
        <Button iconLeft={<IoIosArrowBack />} variant="transparent">
          Назад
        </Button>
      </div>
      <div className="mb-7 flex items-start">
        <div className="flex-grow">
          <ProfileHeader />
        </div>
        <div className="flex gap-2">
          <Button variant="secondary">Удалить</Button>
          <Button>Сохранить</Button>
        </div>
      </div>
      <section className="mb-7">
        <h2 className="mb-4 text-system-900 text-3xl">Обо мне</h2>
        <p className="">
          Напишите сопроводительное сообщение о себе в несколько строк
        </p>
      </section>
      <section>
        <h2 className="mb-4 text-system-900 text-3xl">Опыт работы</h2>
        <p className="">
          Напишите сопроводительное сообщение о себе в несколько строк
        </p>
      </section>
    </Container>
  );
};

export default ResumePage;
