import ListGroup from "./components/ListGroup";

export default function App() {
  const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  return (
    <div>
      <ListGroup heading="Cities" items={items} />
    </div>
  );
}
