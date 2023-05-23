import { ResumeStroke } from '@/app/types/resumes/models';

export type StrokesListProps = {
  strokes: ResumeStroke[];
  blockId: string;
  removeStroke: (blockId: string, stringId: string) => void;
};
