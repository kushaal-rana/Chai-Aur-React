import "./App.css";
import { useEffect, useState } from "react";
import { Header, Footer } from "./components";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import { Outlet } from "react-router-dom";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const dipatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        console.log("userData", userData);
        if (userData) {
          console.log("login");
          dipatch(login(userData));
        } else {
          console.log("logout");
          dipatch(logout());
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <div className="min-h-screen flex justify-between bg-gray-400 flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
