import { useState } from "react";

// Avoid redundant state variables.
// Group related variables inside an object.
// Avoid deeply nested structures.

export default function App() {
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  const [person, setPerson] = useState({
    firstName: "",
    lastName: "",
  });

  const [isLoading, setLoading] = useState(false);

  return (
    <div>
      {person.firstName} {person.lastName}
    </div>
  );
}
