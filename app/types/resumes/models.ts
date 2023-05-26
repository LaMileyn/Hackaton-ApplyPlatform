import { BaseModel } from '../common/models';

export type ResumeBlock = {
  title: string;
} & BaseModel;

export type ResumeBlockFull = {
  strokes: ResumeStroke[];
} & ResumeBlock;

export type ResumeStroke = {
  title: string;
  dateFrom: string;
  dateTo: string;
  subtitle: string;
  description: string;
} & BaseModel;

export type Resume = {
  title: string;
  username: string;
  about: string;
} & BaseModel;

export type ResumeFull = {
  blocks: ResumeBlockFull[];
} & Resume;
