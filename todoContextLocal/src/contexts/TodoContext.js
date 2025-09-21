import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos: [
    //default value of the context
    {
      id: 1,
      todoText: "Buy groceries",
      isCompleted: false,
    },
  ],
  addTodo: (todo) => {},
  updateTodo: (id, todoText) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
});

export const useTodo = () => {
  return useContext(TodoContext); //useContext always needs a context to be passed in and returns the value of the context
};

export const TodoProvider = TodoContext.Provider;
