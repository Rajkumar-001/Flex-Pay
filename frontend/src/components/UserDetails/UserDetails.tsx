import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hook.tsx";
import { fetchUser } from "../../store/Reducers/UserReducer";

export default function UserDetails() {
    const dispatch = useAppDispatch();
    const { isLoading, user, error } = useAppSelector((state) => state.user);

    useEffect(() => {
        dispatch(fetchUser());
    }, [dispatch]);

    return (
        <div className="flex justify-center items-start min-h-screen bg-gray-100 py-4"> {/* Reduced py-8 to py-4 for less space */}
            <div className="max-w-lg w-full bg-white shadow-lg rounded-lg p-6">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-semibold text-gray-800">User Details</h2>
                    <div className="text-sm text-gray-500">{new Date().toLocaleDateString()}</div>
                </div>

                {isLoading && (
                    <div className="flex justify-center items-center">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500"></div>
                    </div>
                )}

                {error && <p className="text-red-500 text-center">{error}</p>}

                {user && (
                    <div>
                        <div className="space-y-3"> {/* Reduced space-y-4 to space-y-3 */}
                            <div className="flex justify-between items-center">
                                <span className="text-sm text-gray-600">First Name:</span>
                                <span className="font-semibold text-gray-800">{user.firstName}</span>
                            </div>

                            <div className="flex justify-between items-center">
                                <span className="text-sm text-gray-600">Last Name:</span>
                                <span className="font-semibold text-gray-800">{user.lastName}</span>
                            </div>

                            <div className="flex justify-between items-center">
                                <span className="text-sm text-gray-600">Email:</span>
                                <span className="font-semibold text-gray-800">{user.email}</span>
                            </div>

                            <div className="flex justify-between items-center">
                                <span className="text-sm text-gray-600">Balance:</span>
                                <span className="font-semibold text-gray-800">{user.balance}</span>
                            </div>

                            <div className="flex justify-between items-center">
                                <span className="text-sm text-gray-600">UPI ID:</span>
                                <span className="font-semibold text-gray-800">{user.upiId}</span>
                            </div>
                        </div>

                        <div className="mt-4 flex justify-center"> {/* Adjusted margin-top for less space */}
                            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-500 focus:outline-none">
                                Update Information
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
