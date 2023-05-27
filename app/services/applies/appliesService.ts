import { $api } from '../instance';

class AplliesService {
  async applyToVacancy(id: number) {
    return $api.post('/applies');
  }
}

export default new AplliesService();
