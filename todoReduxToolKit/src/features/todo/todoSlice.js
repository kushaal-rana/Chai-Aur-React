import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: nanoid(),
      text: "Learn Redux",
      completed: false,
    },
  ],
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    //properties and functions related to the slice
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
        completed: false,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    toggleComplete: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
      return state;
    },
    updateTodo: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload.id); //this is the todo that we want to update
      if (todo) {
        todo.text = action.payload.text;
      }
      return state;
    },
  },
});

export const { addTodo, removeTodo, toggleComplete, updateTodo } =
  todoSlice.actions;

export default todoSlice.reducer;
