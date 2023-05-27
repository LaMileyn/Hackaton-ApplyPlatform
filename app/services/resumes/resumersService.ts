import { ResumeFull } from '@/app/types/resumes';
import { $api } from '../instance';

class ResumesService {
  async getResume(id: number) {
    const { data } = await $api.get<ResumeFull>('/cv/' + id);
    return data;
  }
}

export default new ResumesService();
