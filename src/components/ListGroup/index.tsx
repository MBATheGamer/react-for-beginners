import { useState } from "react";
import "./styles.css";

type Props = {
  heading: string;
  items: string[];
  onSelectItem: (item: string) => void;
};

export default function ListGroup({ heading, items, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item}
            className={
              "list-group-item" + (selectedIndex === index ? " active" : "")
            }
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
