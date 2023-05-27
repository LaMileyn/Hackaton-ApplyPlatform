import { AuthUser, CreateUser, User } from '@/app/types/users';
import { $api, BASE_URL } from '../instance';
import axios from 'axios';

class UserService {
  async register(body: CreateUser) {
    const { data } = await axios.post<User>(`${BASE_URL}/auth/signUp`, body);
    return data;
  }
  async login(body: AuthUser) {
    const { data } = await axios.post<User>(`${BASE_URL}/auth/signIn`, body);
    return data;
  }
  async getUser(user: User | null | undefined) {
    if (!user) return null;
    const { data } = await $api.get<User>(`/users/${user.ID}`);
    return data;
  }
}

export default new UserService();
