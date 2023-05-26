import { ResumeStroke } from '@/app/types/resumes/models';

export type StrokesListProps = {
  strokes: ResumeStroke[];
  blockId: number;
  removeStroke: (blockId: number, stringId: number) => void;
};
