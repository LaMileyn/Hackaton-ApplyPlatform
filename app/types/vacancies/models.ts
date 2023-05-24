export type Vacancy = {
  id: string;
  title: string;
  company: string;
  description: string;
  infoBlocks: VacancyInfoBlock[];
};

export type VacancyInfoBlock = {
  title: string;
  text: string;
};
