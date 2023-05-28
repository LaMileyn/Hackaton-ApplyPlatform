import {
  ApplieWithVacancy,
  ApplyInfoResponse,
  CreateApply,
  EApplieStatus,
} from '@/app/types/applies';
import { $api } from '../instance';
import { ChangeApplyStatusRequest } from '@/app/types/applies/requests';

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
  async changeApplyStatus(data: ChangeApplyStatusRequest) {
    return $api.post('/applies/' + data.id + '/status', {
      status: data.status,
    });
  }
}

export default new AplliesService();
