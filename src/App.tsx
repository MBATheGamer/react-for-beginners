import { useState } from "react";

export default function App() {
  const [tags, setTags] = useState(["happy", "cheerful"]);

  const handleClick = () => {
    // Add
    setTags([...tags, "exciting"]);

    // Update
    setTags(tags.map(tag => (tag === "happy" ? "happiness" : tag)));

    // Remove
    setTags(tags.filter(tag => tag !== "happy"));
  };

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}
