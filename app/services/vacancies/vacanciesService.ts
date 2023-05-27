import { Vacancy, VacancyWithTemplates } from '@/app/types/vacancies';
import { $api } from '../instance';

class VacanciesService {
  async getAll(queryString: string) {
    const { data } = await $api.get<Vacancy[]>(`/vacancies?${queryString}`);
    return data;
  }
  async getVacancy(id: Vacancy['id']) {
    const { data } = await $api.get<VacancyWithTemplates>('/vacancies/' + id);
    return data;
  }
  async checkApplyButtonStatus(id: Vacancy['id']) {
    const { data } = await $api.get<boolean>(`/vacancies/${id}/applyStatus`);
    return data;
  }

  async createVacancy(body: Omit<VacancyWithTemplates, 'id'>) {
    const { data } = await $api.post<Vacancy>('/vacancies', body);
    return data;
  }
}

export default new VacanciesService();
