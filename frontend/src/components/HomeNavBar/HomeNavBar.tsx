import React from "react";
import { useAppSelector } from "../../store/hook.tsx";

export default function HomeNavbar() {
    // Fetch the user's first name from the Redux store
    const firstName = useAppSelector((state) => state.user.user?.firstName);

    return (
        <div className="flex justify-between items-center bg-blue-200 p-4 border-b-2 border-blue-500 gap-5">
            {/* Left Section: Welcome Message and Date */}
            <div className="flex items-center gap-10">
                <h1 className="text-lg font-bold">
                    Welcome, {firstName ? firstName : "Guest"}!
                </h1>
                <p className="text-sm text-gray-700">{new Date().toDateString()}</p>
            </div>

            {/* Right Section: Dark Mode and Logout Buttons */}
            <div className="flex items-center gap-5">
                <button className="bg-red-800 text-white px-4 py-2 rounded-lg">
                    Dark Mode
                </button>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
                    Logout
                </button>
            </div>
        </div>
    );
}
