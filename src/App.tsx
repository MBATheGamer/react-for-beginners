import { useState } from "react";
import Button from "./components/Button";

export default function App() {
  // [false, true]
  const [isVisible, setVisibility] = useState(false);
  const [isApproved, setApproved] = useState(true);
  // reset to 0
  let count = 0;

  const handleClick = () => {
    setVisibility(true);
    count++;
    console.log(isVisible); // false
    console.log(count); // 1
  };

  return (
    <div>
      <Button onClick={handleClick}>Show</Button>
    </div>
  );
}
