import React, { useState } from "react";
import AddTodo from "./AddTodo";
import { useSelector, useDispatch } from "react-redux";
import {
  removeTodo,
  toggleComplete,
  updateTodo,
} from "../features/todo/todoSlice";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  // 🎯 STEP 1: State for tracking which todo is being edited
  const [editingId, setEditingId] = useState(null);
  // 🎯 STEP 2: State for storing the temporary edit text
  const [editText, setEditText] = useState("");

  // 🎯 STEP 3: Function to START editing
  const handleEditStart = (todo) => {
    console.log("🟡 Starting edit for:", todo.text);
    setEditingId(todo.id); // Mark this todo as being edited
    setEditText(todo.text); // Pre-fill with current text
  };

  // 🎯 STEP 4: Function to SAVE the edit
  const handleEditSave = (id) => {
    console.log("🟢 Saving edit:", editText);
    if (editText.trim()) {
      // Only save if text isn't empty
      dispatch(updateTodo({ id, text: editText.trim() }));
    }
    setEditingId(null); // Stop editing
    setEditText(""); // Clear temporary text
  };

  // 🎯 STEP 5: Function to CANCEL the edit
  const handleEditCancel = () => {
    console.log("🔴 Canceling edit");
    setEditingId(null); // Stop editing
    setEditText(""); // Clear temporary text
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">
            📋 Redux Todo App
          </h1>
          <p className="text-gray-400">Manage your tasks with Redux Toolkit</p>
        </div>

        {/* Add Todo Form */}
        <div className="bg-gray-800 rounded-xl p-6 mb-8 shadow-2xl">
          <AddTodo />
        </div>

        {/* Todos List */}
        <div className="space-y-4">
          {todos.length === 0 ? (
            <div className="bg-gray-800 rounded-xl p-12 text-center shadow-xl">
              <div className="text-6xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold text-white mb-2">
                No todos yet!
              </h3>
              <p className="text-gray-400">
                Add your first todo above to get started
              </p>
            </div>
          ) : (
            todos.map((todo) => (
              <div
                key={todo.id}
                className={`bg-gray-800 rounded-xl p-6 shadow-xl border-l-4 transition-all duration-300 hover:shadow-2xl ${
                  todo.completed
                    ? "border-green-500 bg-opacity-75"
                    : "border-blue-500 hover:border-blue-400"
                }`}
              >
                <div className="flex items-center justify-between">
                  {/* Left side - Checkbox and text */}
                  <div className="flex items-center space-x-4 flex-1">
                    <button
                      onClick={() => dispatch(toggleComplete(todo.id))}
                      className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
                        todo.completed
                          ? "bg-green-500 border-green-500 text-white"
                          : "border-gray-400 hover:border-green-400 hover:bg-green-50"
                      }`}
                    >
                      {todo.completed && "✓"}
                    </button>

                    {/* 🎯 STEP 6: Conditional rendering - Input OR Text */}
                    {editingId === todo.id ? (
                      // 🟡 EDIT MODE: Show input field
                      <input
                        type="text"
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                        className="bg-gray-700 text-white px-3 py-2 rounded-lg border border-gray-500 focus:border-blue-400 focus:outline-none flex-1 text-lg"
                        autoFocus
                        onKeyDown={(e) => {
                          if (e.key === "Enter") handleEditSave(todo.id);
                          if (e.key === "Escape") handleEditCancel();
                        }}
                      />
                    ) : (
                      // 🟢 VIEW MODE: Show normal text
                      <p
                        className={`text-lg transition-all duration-200 ${
                          todo.completed
                            ? "text-gray-400 line-through"
                            : "text-white"
                        }`}
                      >
                        {todo.text}
                      </p>
                    )}
                  </div>

                  {/* Right side - Action buttons */}
                  <div className="flex space-x-2">
                    {/* 🎯 STEP 7: Conditional buttons based on edit state */}
                    {editingId === todo.id ? (
                      // 🟡 EDITING MODE: Show Save and Cancel buttons
                      <>
                        <button
                          onClick={() => handleEditSave(todo.id)}
                          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center space-x-1"
                        >
                          <span>✅</span>
                          <span>Save</span>
                        </button>
                        <button
                          onClick={handleEditCancel}
                          className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center space-x-1"
                        >
                          <span>❌</span>
                          <span>Cancel</span>
                        </button>
                      </>
                    ) : (
                      // 🟢 VIEW MODE: Show Edit and Delete buttons
                      <>
                        <button
                          onClick={() => handleEditStart(todo)}
                          disabled={todo.completed}
                          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center space-x-1 ${
                            todo.completed
                              ? "bg-gray-600 text-gray-400 cursor-not-allowed"
                              : "bg-yellow-600 hover:bg-yellow-700 text-white"
                          }`}
                        >
                          <span>✏️</span>
                          <span>Edit</span>
                        </button>

                        <button
                          onClick={() => dispatch(removeTodo(todo.id))}
                          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center space-x-1"
                        >
                          <span>🗑️</span>
                          <span>Delete</span>
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Stats Footer */}
        {todos.length > 0 && (
          <div className="bg-gray-800 rounded-xl p-4 mt-8 shadow-xl">
            <div className="flex justify-between text-sm">
              <div className="text-blue-400 font-medium">
                📊 Total: <span className="text-white">{todos.length}</span>
              </div>
              <div className="text-green-400 font-medium">
                ✅ Completed:{" "}
                <span className="text-white">
                  {todos.filter((t) => t.completed).length}
                </span>
              </div>
              <div className="text-yellow-400 font-medium">
                ⏳ Remaining:{" "}
                <span className="text-white">
                  {todos.filter((t) => !t.completed).length}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Todos;
