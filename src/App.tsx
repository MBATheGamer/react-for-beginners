import { useState } from "react";
import ExpenseList from "./expense-tracker/components/ExpenseList";

export default function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "Milk", amount: 5, category: "Groceries" },
    { id: 2, description: "Eggs", amount: 10, category: "Groceries" },
    { id: 3, description: "Electricity", amount: 100, category: "Utilities" },
    { id: 4, description: "Movies", amount: 15, category: "Entertainment" },
  ]);

  return (
    <div>
      <ExpenseList
        expenses={expenses}
        onDelete={(id: number) =>
          setExpenses(expenses.filter(expense => expense.id !== id))
        }
      />
    </div>
  );
}
