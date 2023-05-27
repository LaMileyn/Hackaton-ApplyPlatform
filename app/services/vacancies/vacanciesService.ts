import { Vacancy, VacancyWithTemplates } from '@/app/types/vacancies';
import { $api } from '../instance';

class VacanciesService {
  async getAll(queryString: string) {
    const { data } = await $api.get<Vacancy[]>(`/vacancies?${queryString}`);
    return data;
  }
  async getVacancy(ID: Vacancy['ID']) {
    const { data } = await $api.get<VacancyWithTemplates>('/vacancies/' + ID);
    return data;
  }
  async checkApplyButtonStatus(ID: Vacancy['ID']) {
    const { data } = await $api.get<boolean>(`/vacancies/${ID}/applyStatus`);
    return data;
  }

  async createVacancy(body: Omit<VacancyWithTemplates, 'ID'>) {
    const { data } = await $api.post<Vacancy>('/vacancies', body);
    return data;
  }
}

export default new VacanciesService();
