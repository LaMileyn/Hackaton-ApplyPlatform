import { ResumeBlock } from '@/app/types/resumes/models';

export type BlockItemProps = {
  block: ResumeBlock;
  addStroke: (blockId: string) => void;
  removeStroke: (blockId: string, stringId: string) => void;
};
