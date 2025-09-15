import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./components/Home/home";
import Footer from "./components/Footer/footer";
import Header from "./components/Header/header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-3xl font-bold underline bg-red-500 p-6 border-2 rounded-lg mb-3">
        React Router
      </h1>
      <Header />
      <Home />
      <Footer />
    </>
  );
}

export default App;
