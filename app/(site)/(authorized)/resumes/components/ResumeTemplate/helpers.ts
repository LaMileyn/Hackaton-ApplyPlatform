import { generateUuid } from '@/app/helpers';

export const generateInitialStroke = () => {
  return {
    ID: generateUuid(),
    dateFrom: '2003-06-17T00:00:00Z',
    dateTo: '2003-06-17T00:00:00Z',
    description: '',
    subtitle: '',
    title: '',
  };
};
export const generateInitialBlock = () => {
  return {
    ID: generateUuid(),
    title: '',
    strokes: [generateInitialStroke()],
  };
};
export const generateInitialResume = () => {
  return {
    ID: generateUuid(),
    about: '',
    blocks: [generateInitialBlock()],
    title: '',
    username: 'Олег Демидов',
  };
};
