import { ResumeStroke } from '@/app/types/resumes/models';

export type StrokeItemProps = {
  stroke: ResumeStroke;
  blockId: string;
  removeStroke: (blockId: string, stringId: string) => void;
};
