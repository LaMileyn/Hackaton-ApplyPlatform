import {
  ApplieWithVacancy,
  ApplyInfoResponse,
  CreateApply,
} from '@/app/types/applies';
import { $api } from '../instance';

class AplliesService {
  async applyToVacancy(data: CreateApply) {
    return $api.post('/applies', data);
  }
  async getMyApplies() {
    const { data } = await $api.get<ApplieWithVacancy[]>('/applies/my');
    return data;
  }
  async getApplyInfo(id: number | null) {
    if (!id) return null;
    const { data } = await $api.get<ApplyInfoResponse>(`/applies/${id}`);
    return data;
  }
}

export default new AplliesService();
