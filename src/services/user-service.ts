import apiClient from "./api-client";

export type User = {
  id: number;
  name: string;
};

class UserService {
  getAll() {
    const controller = new AbortController();

    const request = apiClient.get<User[]>("users", {
      signal: controller.signal,
    });

    return {
      request,
      cancel: () => controller.abort(),
    };
  }

  create(user: User) {
    return apiClient.post("users", user);
  }

  update(user: User) {
    return apiClient.patch(`users/${user.id}`, user);
  }

  delete(id: number) {
    return apiClient.delete(`users/${id}`);
  }
}

export default new UserService();
