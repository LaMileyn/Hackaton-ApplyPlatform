import {
  ResumeBlockFull,
  ResumeFull,
  ResumeStroke,
} from '@/app/types/resumes/models';

export const initialStroke: ResumeStroke = {
  ID: 1,
  dateFrom: '',
  dateTo: '',
  description: '',
  subtitle: '',
  title: '',
};

export const initialBlock: ResumeBlockFull = {
  ID: 1,
  title: '',
  strokes: [initialStroke],
};

export const blocksData: ResumeBlockFull[] = [
  {
    ID: 1,
    title: '',
    strokes: [
      {
        ID: 1,
        title: '',
        subtitle: '',
        dateFrom: '',
        dateTo: '',
        description: '',
      },
    ],
  },
];

export const initialResume: ResumeFull = {
  ID: 1,
  about: '',
  blocks: blocksData,
  title: '',
  username: 'ahmed',
};
