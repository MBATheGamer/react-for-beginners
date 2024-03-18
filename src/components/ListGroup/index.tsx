import { useState } from "react";
import styled from "styled-components";

type Props = {
  heading: string;
  items: string[];
  onSelectItem: (item: string) => void;
};

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

type ListItemProps = {
  active: boolean;
};

const ListItem = styled.li<ListItemProps>`
  padding: 5px 0;
  background: ${props => (props.active ? "blue" : "none")};
  color: ${props => (props.active ? "white" : "black")};
`;

export default function ListGroup({ heading, items, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}
      <List>
        {items.map((item, index) => (
          <ListItem
            active={index === selectedIndex}
            key={item}
            className={selectedIndex === index ? " active" : ""}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </ListItem>
        ))}
      </List>
    </>
  );
}
