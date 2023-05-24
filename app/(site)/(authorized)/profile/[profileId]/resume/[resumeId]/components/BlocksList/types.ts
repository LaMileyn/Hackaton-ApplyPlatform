import { ResumeBlock, ResumeStroke } from '@/app/types/resumes/models';

export type BlockListProps = {
  blocks: ResumeBlock[];
};

export type ResumeStokeKeys = keyof ResumeStroke;
