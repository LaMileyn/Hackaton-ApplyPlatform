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
