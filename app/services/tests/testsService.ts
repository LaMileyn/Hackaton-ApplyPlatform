import { Test, TestWithQuestions } from '@/app/types/tests';
import { $api } from '../instance';

class TestsService {
  async createTest(body: TestWithQuestions) {
    const { data } = await $api.post<Test>('/tests', body);
    return data;
  }
  async updateTest(testId: number, body: TestWithQuestions) {
    const { data } = await $api.put<Test>('/tests/' + testId, body);
    return data;
  }
  async getTest(testId: number) {
    if (!testId) return null;
    const { data } = await $api.get<TestWithQuestions>('/tests/' + testId);
    return data;
  }
}

export default new TestsService();
