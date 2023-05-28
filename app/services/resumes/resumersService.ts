import { Resume, ResumeFull } from '@/app/types/resumes';
import { $api } from '../instance';

class ResumesService {
  async getResume(id: number) {
    const { data } = await $api.get<ResumeFull>('/cv/' + id);
    return data;
  }
  async createResume(resume: ResumeFull) {
    const { data } = await $api.post<Resume>('/cv', resume);
    return data;
  }
  async updateResume(updatedResume: ResumeFull) {
    const { data } = await $api.put<Resume>(
      '/cv/' + updatedResume.ID,
      updatedResume
    );
    return data;
  }
  async getAllResumes() {
    const { data } = await $api.get<Resume[]>('/cv');
    return data;
  }
}

export default new ResumesService();
