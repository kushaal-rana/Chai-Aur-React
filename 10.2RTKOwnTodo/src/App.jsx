import { useState } from "react";

import "./App.css";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline bg-red-500 p-6 border-2 rounded-lg mb-3">
        RTK Own Todo
      </h1>
      <AddTodo />
      <Todos />
    </>
  );
}

export default App;
