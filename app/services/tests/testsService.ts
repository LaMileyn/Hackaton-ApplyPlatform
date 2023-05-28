import { Test } from '@/app/types/tests';
import { $api } from '../instance';

class TestsService {
  async createTest() {
    const { data } = await $api.post<Test>('/tests');
    return data;
  }
  async updateTest(testId: number) {
    const { data } = await $api.put<Test>('/tests/' + testId);
    return data;
  }
}

export default new TestsService();
