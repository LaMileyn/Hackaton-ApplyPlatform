import { ResumeBlockFull } from '@/app/types/resumes/models';

export type BlockItemProps = {
  block: ResumeBlockFull;
  addStroke: (blockId: number) => void;
  removeStroke: (blockId: number, stringId: number) => void;
};
