import { Vacancy } from '@/app/types/vacancies';
import { $api } from '../instance';

class VacanciesService {
  async getAll(queryString: string) {
    const { data } = await $api.get<Vacancy[]>(`/vacancies?${queryString}`);
    return data;
  }
}

export default new VacanciesService();
