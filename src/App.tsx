import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import ExpandableText from "./components/ExpandableText";
import Form from "./components/Form";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import ExpenseForm from "./expense-tracker/components/ExpenseForm";
import categories from "./expense-tracker/categories";



function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaa", amount: 10, category: "Utilities" },
    { id: 2, description: "bbb", amount: 10, category: "Utilities" },
    { id: 3, description: "ccc", amount: 10, category: "Groceries" },
    { id: 4, description: "ddd", amount: 10, category: "Entertainment" },
  ]);
  const [filter, setFilter] = useState("");
  const handleDelete = (id: number) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };
  const handleFilterSelect = (category: string) => {
    setFilter(category);
  };
  const filteredContent =
    filter === "All"
      ? expenses
      : expenses.filter((e) => e.category === filter || filter === "");
  return (
    <div>
      <div className="mb-5">
        <ExpenseForm onSubmit={(data) => setExpenses([...expenses, data])} expenses={expenses}></ExpenseForm>
      </div>
      <ExpenseList
        expenses={filter === "All" ? expenses : filteredContent}
        onDelete={handleDelete}
        onFilterSelect={handleFilterSelect}
      ></ExpenseList>
    </div>
  );
}

export default App;
