import {
  ResumeBlockFull,
  ResumeFull,
  ResumeStroke,
} from '@/app/types/resumes/models';
import {
  generateInitialBlock,
  generateInitialResume,
  generateInitialStroke,
} from './helpers';

export const initialStroke: ResumeStroke = generateInitialStroke();

export const initialBlock: ResumeBlockFull = generateInitialBlock();

export const initialResume: ResumeFull = generateInitialResume();
