import apiClient from "./api-client";

type Entity = {
  id: number;
};

class HttpService<T extends Entity> {
  private readonly endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll() {
    const controller = new AbortController();

    const request = apiClient.get<T[]>(this.endpoint, {
      signal: controller.signal,
    });

    return {
      request,
      cancel: () => controller.abort(),
    };
  }

  create(entity: T) {
    return apiClient.post(this.endpoint, entity);
  }

  update(entity: T) {
    return apiClient.patch(`${this.endpoint}/${entity.id}`, entity);
  }

  delete(id: number) {
    return apiClient.delete(`${this.endpoint}/${id}`);
  }
}

const createHttpService = <T extends Entity>(endpoint: string) =>
  new HttpService<T>(endpoint);

export default createHttpService;
