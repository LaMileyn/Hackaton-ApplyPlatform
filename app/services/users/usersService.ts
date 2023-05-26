import { AuthUser, CreateUser, User } from '@/app/types/users';
import { $api } from '../instance';

class UserService {
  async register(body: CreateUser) {
    const { data } = await $api.post<User>('/signup', body);
    return data;
  }
  async login(body: AuthUser) {
    const { data } = await $api.post<User>('/auth', body);
    return data;
  }
  async getUser(user: User | null | undefined) {
    if (!user) return null;
    const { data } = await $api.get<User>(`/users/${user.id}`);
    return data;
  }
}

export default new UserService();
