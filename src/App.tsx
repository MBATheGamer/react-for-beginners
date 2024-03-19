import { useState } from "react";

export default function App() {
  const [drink, setDrink] = useState({
    title: "Americano",
    price: 5,
  });

  const handleClick = () => {
    setDrink({ ...drink, price: 6 });
  };

  return (
    <div>
      <h1>{drink.title}</h1>
      <h2>{drink.price}</h2>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}
