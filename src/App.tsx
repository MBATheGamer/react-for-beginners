import axios, { CanceledError } from "axios";
import { useEffect, useState } from "react";

type User = {
  id: number;
  name: string;
};

export default function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users", {
        signal: controller.signal,
      })
      .then(response => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch(err => {
        setLoading(false);
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    return () => controller.abort();
  }, []);

  const deleteUser = (user: User) => {
    const originalUsers = [...users];

    setUsers(users.filter(u => user.id !== u.id));
    axios
      .delete("https://jsonplaceholder.typicode.com/users/" + user.id)
      .catch(err => {
        setError(err.message);
        setUsers(originalUsers);
      });
  };

  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      {isLoading && <div className="spinner-border"></div>}
      <ul className="list-group">
        {users.map(user => (
          <li
            key={user.id}
            className="list-group-item d-flex justify-content-between"
            onClick={() => deleteUser(user)}
          >
            {user.name}
            <button className="btn btn-outline-danger">Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}
