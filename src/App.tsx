import axios from "axios";
import { useEffect, useState } from "react";

type User = {
  id: number;
  name: string;
};

export default function App() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users")
      .then(response => setUsers(response.data));
  }, []);

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
