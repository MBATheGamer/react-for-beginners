import Button from "./components/Button";

export default function App() {
  return (
    <div>
      <Button onClick={() => console.log("Clicked")}>Click Me</Button>
    </div>
  );
}
