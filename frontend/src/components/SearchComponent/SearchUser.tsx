import { useState, useEffect } from "react";
import axios from "axios";

export default function SearchUser() {
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const token = localStorage.getItem("authToken");
        const response = await axios.get(
          `http://localhost:3001/api/user/search/${search.trim() || ""}`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error.response?.data || error.message);
      }
    };

    fetchUsers();
  }, [search]);

  const handleSend = (userId) => {
    console.log(`Send action triggered for user with ID: ${userId}`);
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gradient-to-r from-blue-500 to-indigo-600 p-6">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-2xl">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">
          Search User
        </h2>
        <p className="text-gray-600 text-center mb-4">
          Find users by entering their name or email in the search bar below.
        </p>
        <div className="relative mb-6">
          <input
            type="text"
            placeholder="Search by name or email"
            className="w-full border-2 border-gray-300 p-3 rounded-lg outline-none focus:border-indigo-500 transition duration-300"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <svg
            className="absolute right-3 top-3 text-gray-400 w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 14l2-2m0 0l2-2m-2 2l2 2m-2-2l-2-2m0 8a9 9 0 110-18 9 9 0 010 18z"
            />
          </svg>
        </div>
        <ul className="space-y-4">
          {users.map((user) => (
            <li
              key={user.id}
              className="p-4 border rounded-lg shadow-sm bg-gray-50 hover:shadow-md transition duration-300 flex justify-between items-center"
            >
              <div>
                <p className="font-semibold text-gray-800">
                  {user.firstName} {user.lastName}
                </p>
                <p className="text-gray-500 text-sm">{user.email}</p>
              </div>
              <button
                onClick={() => handleSend(user.id)}
                className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
              >
                Send
              </button>
            </li>
          ))}
          {users.length === 0 && (
            <li className="text-gray-500 text-center">No users found</li>
          )}
        </ul>
      </div>
    </div>
  );
}
