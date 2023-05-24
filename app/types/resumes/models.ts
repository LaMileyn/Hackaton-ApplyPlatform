export type ResumeBlock = {
  id: string;
  title: string;
  strokes: ResumeStroke[];
};
export type ResumeStroke = {
  id: string;
  title: string;
  dateFrom: string;
  dateTo: string;
  subtitle: string;
  description: string;
};

export type Resume = {
  id: string;
  title: string;
  username: string;
  aboutMe: string;
  blocks: ResumeBlock[];
};
