import "./App.css";

function App() {
  const VITE_APPWRITE_URL = import.meta.env.VITE_APPWRITE_URL;
  console.log(VITE_APPWRITE_URL);
  return (
    <>
      <h1>Hello World</h1>
    </>
  );
}

export default App;
