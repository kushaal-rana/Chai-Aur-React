import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [
      {
        id: nanoid(),
        text: "Learn RTK",
        completed: false,
      },
    ],
    //Add editingId and editText
    editingId: null,
    editText: "",
  },
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload.text,
        completed: false,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      console.log("Original state:", state);
      const todo = state.todos.find((todo) => todo.id === action.payload.id);
      console.log("Found todo:", todo);
      console.log("Are they the same reference?", todo === state.todos[0]);

      if (todo) {
        todo.text = action.payload.text;
        console.log("After 'mutation':", todo);
      }
      state.editingId = null;
      state.editText = "";
    },
    startEditing: (state, action) => {
      state.editingId = action.payload.id;
      state.editText = action.payload.text;
    },
    cancelEditing: (state) => {
      state.editingId = null;
      state.editText = "";
    },
    setEditText: (state, action) => {
      state.editText = action.payload;
    },
  },
});

export const {
  addTodo,
  removeTodo,
  updateTodo,
  startEditing,
  cancelEditing,
  setEditText,
} = todoSlice.actions; //components can use this action to add a todo

export default todoSlice.reducer; //this is used to create the store
