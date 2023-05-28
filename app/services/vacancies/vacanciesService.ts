import { Vacancy, VacancyWithTemplates } from '@/app/types/vacancies';
import { $api } from '../instance';
import { ApplieWithUser } from '@/app/types/applies';

class VacanciesService {
  async getAll(queryString: string) {
    const { data } = await $api.get<Vacancy[]>(`/vacancies`);
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
  async updateVacancy(body: VacancyWithTemplates) {
    const { data } = await $api.put<Vacancy>('/vacancies/' + body.ID, body);
    return data;
  }

  async getVacancyApplies(id: number) {
    const { data } = await $api.get<ApplieWithUser[]>(
      `/vacancies/${id}/applies`
    );
    return data;
  }
}

export default new VacanciesService();
