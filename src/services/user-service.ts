import createHttpService from "./http-service";

export type User = {
  id: number;
  name: string;
};

export default createHttpService<User>("users");
