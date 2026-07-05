function TodoItem({ todo, deleteTodo, toggleTodo }) {
  return (
    <div className="todo">
      <span
        onClick={() => toggleTodo(todo.id)}
        className={todo.completed ? "completed" : ""}
      >
        {todo.text}
      </span>

      <button onClick={() => deleteTodo(todo.id)}>
        Delete
      </button>
    </div>
  );
}

export default TodoItem;