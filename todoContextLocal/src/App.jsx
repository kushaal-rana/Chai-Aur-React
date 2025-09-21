import "./App.css";
import { useState, useEffect } from "react";
import { TodoProvider } from "./contexts";
import { TodoForm, TodoItem } from "./components";

function App() {
  const [todos, setTodos] = useState([]); //These are all the todos that are in the context

  const addTodo = (todo) => {
    setTodos((prev) => [
      ...prev,
      { ...todo }, //TODO: check this once again
    ]);
    // setTodo([...todos, todo]);
  };

  const updateTodo = (id, todoText) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { id, todoText, isCompleted: prevTodo.isCompleted } //dont need to mention id and todoText again as they are already present in the prevTodo { ...prevTodo , isCompleted: !prevTodo.isCompleted} //this is the short way to do it`
          : prevTodo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((prevTodo) => prevTodo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map(
        (prevTodo) =>
          prevTodo.id === id
            ? { ...prevTodo, isCompleted: !prevTodo.isCompleted }
            : prevTodo //dont need to mention id and todoText again as they are already present in the prevTodo
      )
    );
  };

  useEffect(() => {
    const todos = localStorage.getItem("todos"); //this is used to get the todos from the local storage
    if (todos && todos.length > 0) {
      setTodos(JSON.parse(todos));
    }
  }, []); // Add empty dependency array to run only once

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {todos.map((todo) => (
              <div key={todo.id} className="w-full">
                <TodoItem todo={todo} />
              </div>
            ))}
            {/*Loop and Add TodoItem here */}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
