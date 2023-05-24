import { ResumeBlock } from '@/app/types/resumes/models';

export type ResumeBodyProps = {
  isOwner: boolean;
  blocks: ResumeBlock[];
};
