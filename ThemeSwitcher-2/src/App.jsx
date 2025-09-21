import { useState, useEffect } from "react";
import "./App.css";
import { ThemeProvider } from "./contexts/theme";
import useTheme from "./contexts/theme";
import ThemeBtn from "./components/Theme";
import Card from "./components/Card";
function App() {
  const [themeMode, setThemeMode] = useState("light");
  const lightTheme = () => {
    setThemeMode("light");
    console.log(themeMode, "Called Light Theme");
  };
  const darkTheme = () => {
    setThemeMode("dark");
    console.log(themeMode, "Called Dark Theme");
  };

  //actual change in theme using Classic JS
  useEffect(() => {
    const html = document.querySelector("html");
    html.classList.remove("light", "dark");
    html.classList.add(themeMode);
  }, [themeMode]);

  const theme = useTheme();

  return (
    <>
      <ThemeProvider
        value={{
          themeMode: themeMode,
          darkTheme,
          lightTheme,
        }}
      >
        <h1 className="text-3xl font-bold underline bg-red-500 p-6 border-2 rounded-lg mb-1 text-center bg-red-500 text-white">
          Theme Switcher
        </h1>
        <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
              <ThemeBtn />
            </div>

            <div className="w-full max-w-sm mx-auto">
              <Card />
            </div>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
