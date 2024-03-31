import { useState } from "react";
import ExpenseList from "@expense-tracker/components/ExpenseList";
import ExpenseFilter from "@expense-tracker/components/ExpenseFilter";
import ExpenseForm from "@expense-tracker/components/ExpenseForm";

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState("");

  const [expenses, setExpenses] = useState([
    { id: 1, description: "Milk", amount: 5, category: "Groceries" },
    { id: 2, description: "Eggs", amount: 10, category: "Groceries" },
    { id: 3, description: "Electricity", amount: 100, category: "Utilities" },
    { id: 4, description: "Movies", amount: 15, category: "Entertainment" },
  ]);

  const visibleExpenses = selectedCategory
    ? expenses.filter(expense => expense.category === selectedCategory)
    : expenses;

  return (
    <div>
      <div className="mb-5">
        <ExpenseForm
          onSubmit={expense =>
            setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
          }
        />
      </div>
      <div className="mb-3">
        <ExpenseFilter
          onSelectCatergory={category => setSelectedCategory(category)}
        />
      </div>
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id: number) =>
          setExpenses(expenses.filter(expense => expense.id !== id))
        }
      />
    </div>
  );
}
