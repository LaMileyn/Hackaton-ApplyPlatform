import { ResumeStroke } from '@/app/types/resumes/models';

export type StrokeItemProps = {
  stroke: ResumeStroke;
  blockId: number;
  removeStroke: (blockId: number, stringId: number) => void;
};
