import {
  ResumeBlock,
  ResumeBlockFull,
  ResumeStroke,
} from '@/app/types/resumes/models';

export type BlockListProps = {
  blocks: ResumeBlockFull[];
};

export type ResumeStokeKeys = keyof ResumeStroke;
