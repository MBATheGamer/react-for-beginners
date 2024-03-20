import { useState } from "react";

export default function App() {
  const [pizza, setPizza] = useState({
    name: "Spicy Pepperoni",
    toppings: ["Mushroom"],
  });

  const handleClick = () => {
    setPizza({ ...pizza, toppings: [...pizza.toppings, "Cheese"] });
  };

  return (
    <div>
      <p>{pizza.name}</p>
      <ul>
        {pizza.toppings.map(topping => (
          <li key={topping}>{topping}</li>
        ))}
      </ul>
      <button onClick={handleClick}>Add topping</button>
    </div>
  );
}
