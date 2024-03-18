import ListGroup from "./components/ListGroup";

export default function App() {
  const items = ["New York", "Los Angeles", "San Francisco"];

  return (
    <div>
      <ListGroup heading="Miami" items={items} onSelectItem={() => {}} />
    </div>
  );
}
