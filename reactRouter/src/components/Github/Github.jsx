import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
function Github() {
  const loaderData = useLoaderData(); // Data from loader (initial load)
  const [userData, setUserData] = useState(null);
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchUser = async (user) => {
    setLoading(true);
    try {
      const response = await fetch(`https://api.github.com/users/${user}`);
      const data = await response.json();
      setUserData(data);
    } catch (error) {
      console.error("Error fetching user:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Set initial data from loader
    if (loaderData && !loaderData.message) {
      setUserData(loaderData);
      setUsername(loaderData.login);
    }
  }, [loaderData]);

  const handleSearch = () => {
    if (username.trim()) {
      fetchUser(username);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">
        GitHub User Search
      </h1>

      {/* Search Section */}
      <div className="flex gap-3 mb-8 max-w-md mx-auto">
        <input
          className="flex-1 border-2 border-gray-300 rounded-lg px-4 py-2 focus:border-blue-500 focus:outline-none transition-colors"
          type="text"
          placeholder="Enter GitHub Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSearch()}
        />
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg px-6 py-2 font-medium transition-colors disabled:opacity-50"
          onClick={handleSearch}
          disabled={loading}
        >
          {loading ? "Searching..." : "Search"}
        </button>
      </div>

      {/* User Profile Section */}
      {userData && !userData.message && (
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-2xl mx-auto">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <img
              className="w-32 h-32 rounded-full border-4 border-gray-200"
              src={userData.avatar_url}
              alt={userData.name || userData.login}
            />
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                {userData.name || userData.login}
              </h2>
              <p className="text-gray-600 mb-3">@{userData.login}</p>
              {userData.bio && (
                <p className="text-gray-700 mb-4">{userData.bio}</p>
              )}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                {userData.location && (
                  <div className="flex items-center justify-center md:justify-start gap-2">
                    <span className="text-gray-500">📍</span>
                    <span>{userData.location}</span>
                  </div>
                )}
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <span className="text-gray-500">👥</span>
                  <span>{userData.followers} followers</span>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <span className="text-gray-500">📚</span>
                  <span>{userData.public_repos} repos</span>
                </div>
              </div>
              {userData.html_url && (
                <a
                  href={userData.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
                >
                  View on GitHub
                </a>
              )}
            </div>
          </div>
        </div>
      )}

      {userData && userData.message && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 max-w-md mx-auto text-center">
          <p className="text-red-600">
            User not found. Please try a different username.
          </p>
        </div>
      )}
    </div>
  );
}

export default Github;
