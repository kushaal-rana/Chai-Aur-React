import { useTodo } from "../contexts";
import { useState } from "react";

function TodoForm() {
  const { addTodo } = useTodo();
  const [todoText, setTodoText] = useState("");

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (!todoText) return;
    addTodo({ id: Date.now(), todoText, isCompleted: false });
    setTodoText("");
  };

  return (
    <form className="flex" onSubmit={addTodoHandler}>
      <input
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
