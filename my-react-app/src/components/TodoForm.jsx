import { useState } from "react";

function TodoForm({ addTodo }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    addTodo(input);

    setInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a task..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button>Add</button>
    </form>
  );
}

export default TodoForm;