import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);
  const titles = ["The Mountains", "The Forest", "The Ocean"];
  const descriptions = [
    "This is a video of a sunset in the mountains.",
    "This is a video of a sunset in the forest.",
    "This is a video of a sunset in the ocean.",
  ];
  return (
    <>
      <h1 className="text-3xl font-bold underline bg-red-500 p-6 border-2 rounded-lg mb-3">
        Hello Kushaal
      </h1>
      <div className="flex flex-wrap gap-4">
        <Card titleArr={titles} descriptionArr={descriptions} />
      </div>
      {/* <div className="flex flex-wrap gap-4">
        <Card title={titles[0]} description={descriptions[0]} />
        <Card title={titles[1]} description={descriptions[1]} />
        <Card title={titles[2]} description={descriptions[2]} />
      </div> */}
    </>
  );
}

export default App;
