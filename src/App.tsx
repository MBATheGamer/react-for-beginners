import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

export default function App() {
  const [alertVisible, setAlertVisible] = useState(false);

  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisible(false)}>Hello, World!</Alert>
      )}
      <Button onClick={() => setAlertVisible(true)}>Show Alert</Button>
    </div>
  );
}
