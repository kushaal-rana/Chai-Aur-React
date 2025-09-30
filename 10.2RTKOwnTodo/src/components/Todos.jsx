import React, { useState } from "react";
import { useSelector } from "react-redux";
import { removeTodo, startEditing } from "../features/todoSlice";
import { useDispatch } from "react-redux";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  // Function to START editing
  const handleEditStart = (todo) => {
    console.log("handleEditStart", todo.text);
    dispatch(startEditing({ id: todo.id, text: todo.text }));
  };

  return (
    <div className="max-w-4xl mx-auto mt-8">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-200 mb-2">Your Todos</h2>
        <div className="h-1 w-20 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full"></div>
      </div>

      {/* Todos List */}
      {todos.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-gray-400 text-lg mb-2">No todos yet!</div>
          <div className="text-gray-500 text-sm">
            Add your first todo above to get started.
          </div>
        </div>
      ) : (
        <ul className="space-y-3">
          {todos.map((todo, index) => (
            <li
              className="group bg-gradient-to-r from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600 px-6 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-600 hover:border-gray-500"
              key={todo.id}
            >
              <div className="flex items-center justify-between">
                {/* Left side - Complete button and text */}
                <div className="flex items-center space-x-4 flex-1">
                  <button
                    className="flex-shrink-0 w-10 h-10 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full flex items-center justify-center transition-all duration-200 transform hover:scale-110 shadow-lg hover:shadow-emerald-500/25"
                    title="Mark as complete"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  </button>

                  <div className="flex-1 min-w-0">
                    <div className="text-white text-lg font-medium leading-relaxed break-words">
                      {todo.text}
                    </div>
                    <div className="text-gray-400 text-xs mt-1">
                      Todo #{index + 1}
                    </div>
                  </div>
                </div>

                {/* Right side - Action buttons */}
                <div className="flex items-center space-x-2 ml-4">
                  <button
                    className="w-10 h-10 bg-blue-500 hover:bg-blue-600 text-white rounded-full flex items-center justify-center transition-all duration-200 transform hover:scale-110 shadow-lg hover:shadow-blue-500/25 opacity-80 group-hover:opacity-100"
                    onClick={() => handleEditStart(todo)}
                    title="Edit todo"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                      />
                    </svg>
                  </button>

                  <button
                    className="w-10 h-10 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center transition-all duration-200 transform hover:scale-110 shadow-lg hover:shadow-red-500/25 opacity-80 group-hover:opacity-100"
                    onClick={() => dispatch(removeTodo(todo.id))}
                    title="Delete todo"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}

      {/* Todo count */}
      {todos.length > 0 && (
        <div className="mt-6 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-gray-800 rounded-full border border-gray-600">
            <span className="text-gray-300 text-sm">
              {todos.length} {todos.length === 1 ? "todo" : "todos"} total
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

export default Todos;
