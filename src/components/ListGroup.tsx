import { useState } from "react";

export default function ListGroup() {
  const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item}
            className={
              "list-group-item" + (selectedIndex === index ? " active" : "")
            }
            onClick={() => setSelectedIndex(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
