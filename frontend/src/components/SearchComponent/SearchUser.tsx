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
    <div className="h-screen flex justify-center bg-gray-700">
      <div className="bg-white p-8 rounded-lg shadow-2xl w-1/2">
        <h2 className="text-3xl font-semibold text-center text-gray-800 m-5">
          Search User
        </h2>
        <input
          type="text"
          placeholder="Search User"
          className="w-full border-2 border-gray-200 p-3 rounded-lg outline-none focus:border-gray-500"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <ul className="mt-5">
          {users.map((user) => (
            <li
              key={user.id}
              className="p-2 border-b border-gray-300 flex justify-between items-center"
            >
              <span>
                {user.firstName} {user.lastName}
              </span>
              <button
                onClick={() => handleSend(user.id)}
                className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
              >
                Send
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
