import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import UserContextProvider from "./context/UserContextProvider";
import Login from "./components/Login";
import Profile from "./components/Profile";

function App() {
  return (
    <>
      <UserContextProvider>
        <div className="bg-gray-900 w-full h-screen flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold underline bg-red-500 p-6 border-2 rounded-lg mb-3 text-center bg-red-500 text-white">
            Theme Changer By Kushaal
          </h1>
          <Login />
          <Profile />
        </div>
      </UserContextProvider>
    </>
  );
}

export default App;
