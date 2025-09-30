import { useState, useContext } from "react";
import UserContext from "../context/UserContext";

const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext); // Destructuring the setUser from the UserContext

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
    setUser({ username, password });
    console.log(username, password);
  };

  return (
    <div className="w-full max-w-md mx-auto mt-8">
      <div className="bg-white rounded-xl shadow-2xl p-8 border border-gray-200">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
          Login
        </h2>
        <div className="space-y-6">
          <div>
            <input
              className="w-full border-2 border-gray-300 rounded-lg p-4 text-gray-800 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 transition duration-200"
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <input
              className="w-full border-2 border-gray-300 rounded-lg p-4 text-gray-800 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 transition duration-200"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold rounded-lg p-4 transition duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-200"
            onClick={handleSubmit}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
