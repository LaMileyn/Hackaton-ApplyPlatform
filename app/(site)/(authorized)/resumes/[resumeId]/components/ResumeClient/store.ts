import { generateUuid } from '@/app/helpers';
import {
  ResumeBlock,
  ResumeBlockFull,
  ResumeStroke,
} from '@/app/types/resumes/models';

export const initialStroke: ResumeStroke = {
  ID: 1,
  dateFrom: '',
  dateTo: '',
  description: 'Паша вернель лучший',
  subtitle: 'Павер не лучший вернель',
  title: 'Андроид дизайнер',
};

export const initialBlock: ResumeBlockFull = {
  ID: 1,
  title: 'Образование Данниила',
  strokes: [initialStroke],
};

export const blocksData: ResumeBlockFull[] = [
  {
    ID: 1,
    title: 'Опыт работы',
    strokes: [
      {
        ID: 1,
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
    ID: 2,
    title: 'Образование',
    strokes: [
      {
        ID: 3,
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
