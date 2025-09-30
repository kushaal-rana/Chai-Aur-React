import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  updateTodo,
  setEditText,
  cancelEditing,
} from "../features/todoSlice";

function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const editText = useSelector((state) => state.editText);
  const editingId = useSelector((state) => state.editingId);
  console.log("Received editText", editText, "editingId", editingId);

  const isEditing = editingId !== null;
  console.log("isEditing", isEditing);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isEditing) {
      if (editText.trim()) {
        dispatch(updateTodo({ id: editingId, text: editText.trim() }));
      }
    } else {
      if (input.trim()) {
        dispatch(addTodo({ text: input.trim() }));
        setInput("");
      }
    }
  };

  const handleInputChange = (e) => {
    if (isEditing) {
      dispatch(setEditText(e.target.value));
    } else {
      setInput(e.target.value);
    }
  };

  const handleCancel = () => {
    dispatch(cancelEditing());
  };

  return (
    <div className="max-w-4xl mx-auto mb-8">
      {/* Header Section */}
      <div className="mb-6 text-center">
        <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-600 mb-2">
          {isEditing ? "Edit Your Todo" : "Add New Todo"}
        </h1>
        <p className="text-gray-400 text-sm">
          {isEditing
            ? "Make your changes and save"
            : "What would you like to accomplish today?"}
        </p>
      </div>

      {/* Form Container */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-700 p-6 rounded-2xl shadow-2xl border border-gray-600">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-4 items-end"
        >
          {/* Input Container */}
          <div className="flex-1 space-y-2">
            <label className="block text-sm font-medium text-gray-300">
              {isEditing ? "Edit Todo" : "Todo Description"}
            </label>
            <div className="relative">
              <input
                type="text"
                className="w-full bg-gray-900 rounded-xl border-2 border-gray-600 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20 text-base outline-none text-gray-100 py-4 px-4 leading-6 transition-all duration-300 ease-in-out placeholder-gray-400 shadow-inner"
                placeholder={
                  isEditing ? "Edit your todo..." : "Enter a new todo..."
                }
                value={isEditing ? editText : input}
                onChange={handleInputChange}
              />
              {/* Input decoration */}
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <div className="w-2 h-2 bg-indigo-500 rounded-full opacity-50"></div>
              </div>
            </div>
            {/* Character count or status */}
            <div className="flex justify-between items-center text-xs text-gray-400">
              <span>
                {isEditing ? "Editing mode active" : "Type your todo above"}
              </span>
              <span>{(isEditing ? editText : input).length} characters</span>
            </div>
          </div>

          {/* Button Container */}
          <div className="flex gap-3 items-center">
            <button
              type="submit"
              className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-indigo-500/50 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isEditing ? !editText.trim() : !input.trim()}
            >
              <div className="flex items-center space-x-2">
                {isEditing ? (
                  <>
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Save Todo</span>
                  </>
                ) : (
                  <>
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                    <span>Add Todo</span>
                  </>
                )}
              </div>
            </button>

            {isEditing && (
              <button
                type="button"
                onClick={handleCancel}
                className="px-6 py-4 bg-gray-600 hover:bg-gray-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-gray-500/50"
              >
                <div className="flex items-center space-x-2">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                  <span>Cancel</span>
                </div>
              </button>
            )}
          </div>
        </form>

        {/* Status indicator */}
        {isEditing && (
          <div className="mt-4 p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg">
            <div className="flex items-center space-x-2 text-blue-400 text-sm">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                />
              </svg>
              <span>
                You are currently editing a todo. Make your changes and click
                Save.
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default AddTodo;
