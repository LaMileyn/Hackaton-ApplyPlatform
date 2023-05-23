import { generateUuid } from '@/app/helpers';
import { ResumeBlock, ResumeStroke } from '@/app/types/resumes/models';

export const initialStroke: ResumeStroke = {
  id: generateUuid(),
  dateFrom: '',
  dateTo: '',
  description: '',
  subtitle: '',
  title: '',
};

export const initialBlock: ResumeBlock = {
  id: generateUuid(),
  title: '',
  strokes: [initialStroke],
};

export const blocksData: ResumeBlock[] = [
  {
    id: generateUuid(),
    title: 'Опыт работы',
    strokes: [
      {
        id: generateUuid(),
        title: 'Должность',
        subtitle: 'Организация',
        dateFrom: '',
        dateTo: '',
        description:
          'Подробно опишите задачи, которые вы решали на этом месте работы, ваши заслуги и достижения',
      },
      initialStroke,
    ],
  },
  {
    id: generateUuid(),
    title: 'Образование',
    strokes: [
      {
        id: generateUuid(),
        title: 'Должность',
        subtitle: 'Организация',
        dateFrom: '',
        dateTo: '',
        description:
          'Подробно опишите задачи, которые вы решали на этом месте работы, ваши заслуги и достижения',
      },
      initialStroke,
    ],
  },
];
